import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  UserProfile, 
  Worker, 
  Review, 
  ServiceRequest, 
  AppView, 
  RoleMode, 
  ServiceCategory,
  RequestStatus 
} from '../types';
import { INITIAL_WORKERS, INITIAL_REVIEWS, DISTRICTS_CITIES, LOCALITIES_BY_DISTRICT } from '../data/initialData';

interface AppContextType {
  userProfile: UserProfile;
  setUserProfile: (profile: UserProfile) => void;
  workers: Worker[];
  reviews: Review[];
  trustedWorkerIds: string[];
  requests: ServiceRequest[];
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  roleMode: RoleMode;
  setRoleMode: (mode: RoleMode) => void;
  selectedCategory: ServiceCategory | null;
  setSelectedCategory: (cat: ServiceCategory | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Modals & Sliders
  selectedWorkerForProfile: Worker | null;
  setSelectedWorkerForProfile: (w: Worker | null) => void;
  selectedWorkerForRequest: Worker | null;
  setSelectedWorkerForRequest: (w: Worker | null) => void;
  isEmergencyModalOpen: boolean;
  setIsEmergencyModalOpen: (open: boolean) => void;
  emergencyCategoryFilter: string | null;
  setEmergencyCategoryFilter: (type: string | null) => void;
  
  // Actions
  completeOnboarding: (profile: UserProfile) => void;
  toggleSaveTrustedWorker: (workerId: string) => void;
  isWorkerSaved: (workerId: string) => boolean;
  recommendWorker: (workerId: string) => void;
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
  createServiceRequest: (params: Omit<ServiceRequest, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => ServiceRequest;
  updateRequestStatus: (requestId: string, status: RequestStatus) => void;
  updateWorkerAvailability: (workerId: string, status: Worker['availabilityStatus']) => void;
  resetDemoData: () => void;
}

const DEFAULT_PROFILE: UserProfile = {
  name: 'Alex Thomas',
  cityDistrict: DISTRICTS_CITIES[0], // Ernakulam / Kochi
  locality: LOCALITIES_BY_DISTRICT[DISTRICTS_CITIES[0]][0], // Edappally
  livingSituation: 'Shared Apartment',
  addressDetails: 'Green Acres Flat 3B, Edappally',
  phone: '+91 98950 11223',
  isOnboarded: false
};

const INITIAL_DEMO_REQUEST: ServiceRequest = {
  id: 'req-demo-1',
  workerId: 'w1',
  workerName: 'Rahul K. (Rahul Plumbing Services)',
  workerAvatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80',
  workerPhone: '+91 98470 12345',
  serviceCategory: 'plumbing',
  serviceTitle: 'Washroom Tap Leakage Repair',
  userName: 'Alex Thomas',
  userPhone: '+91 98950 11223',
  cityDistrict: DISTRICTS_CITIES[0],
  locality: LOCALITIES_BY_DISTRICT[DISTRICTS_CITIES[0]][0],
  livingSituation: 'Shared Apartment',
  addressDetails: 'Green Acres Flat 3B, Edappally',
  problemDescription: 'Water tap leaking continuously near wash basin',
  preferredDate: 'Today',
  preferredTime: 'Immediate',
  estimatedPrice: 200,
  status: 'Worker On The Way',
  isEmergency: false,
  createdAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
  updatedAt: new Date(Date.now() - 1000 * 60 * 5).toISOString()
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load state from localStorage or use defaults
  const [userProfile, setUserProfileState] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('thuna_user_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  const [workers, setWorkers] = useState<Worker[]>(() => {
    const saved = localStorage.getItem('thuna_workers');
    return saved ? JSON.parse(saved) : INITIAL_WORKERS;
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('thuna_reviews');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [trustedWorkerIds, setTrustedWorkerIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('thuna_trusted_ids');
    return saved ? JSON.parse(saved) : ['w1', 'w2', 'w5']; // Rahul, Anwar, Kabeer
  });

  const [requests, setRequests] = useState<ServiceRequest[]>(() => {
    const saved = localStorage.getItem('thuna_requests');
    return saved ? JSON.parse(saved) : [INITIAL_DEMO_REQUEST];
  });

  const [activeView, setActiveView] = useState<AppView>(() => {
    return userProfile.isOnboarded ? 'home' : 'landing';
  });
  
  const [roleMode, setRoleMode] = useState<RoleMode>('student');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [selectedWorkerForProfile, setSelectedWorkerForProfile] = useState<Worker | null>(null);
  const [selectedWorkerForRequest, setSelectedWorkerForRequest] = useState<Worker | null>(null);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState<boolean>(false);
  const [emergencyCategoryFilter, setEmergencyCategoryFilter] = useState<string | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('thuna_user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('thuna_workers', JSON.stringify(workers));
  }, [workers]);

  useEffect(() => {
    localStorage.setItem('thuna_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('thuna_trusted_ids', JSON.stringify(trustedWorkerIds));
  }, [trustedWorkerIds]);

  useEffect(() => {
    localStorage.setItem('thuna_requests', JSON.stringify(requests));
  }, [requests]);

  const setUserProfile = (profile: UserProfile) => {
    setUserProfileState(profile);
  };

  const completeOnboarding = (profile: UserProfile) => {
    setUserProfileState({ ...profile, isOnboarded: true });
    setActiveView('home');
  };

  const toggleSaveTrustedWorker = (workerId: string) => {
    setTrustedWorkerIds(prev => {
      if (prev.includes(workerId)) {
        return prev.filter(id => id !== workerId);
      } else {
        return [...prev, workerId];
      }
    });
  };

  const isWorkerSaved = (workerId: string) => {
    return trustedWorkerIds.includes(workerId);
  };

  const recommendWorker = (workerId: string) => {
    setWorkers(prev => prev.map(w => {
      if (w.id === workerId) {
        return {
          ...w,
          communityRecommendationsCount: w.communityRecommendationsCount + 1
        };
      }
      return w;
    }));
  };

  const addReview = (newReviewData: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...newReviewData,
      id: `rev-${Date.now()}`,
      date: 'Just now'
    };
    setReviews(prev => [newReview, ...prev]);

    // Also update worker review stats
    setWorkers(prev => prev.map(w => {
      if (w.id === newReviewData.workerId) {
        const newCount = w.reviewCount + 1;
        const newRating = Number(((w.rating * w.reviewCount + newReviewData.rating) / newCount).toFixed(1));
        const newRecs = newReviewData.isRecommended ? w.communityRecommendationsCount + 1 : w.communityRecommendationsCount;
        return {
          ...w,
          reviewCount: newCount,
          rating: newRating,
          communityRecommendationsCount: newRecs
        };
      }
      return w;
    }));
  };

  const createServiceRequest = (params: Omit<ServiceRequest, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => {
    const newReq: ServiceRequest = {
      ...params,
      id: `req-${Date.now()}`,
      status: 'Request Sent',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setRequests(prev => [newReq, ...prev]);
    
    // Auto save worker to trusted list after requesting if not already saved
    if (!trustedWorkerIds.includes(params.workerId)) {
      setTrustedWorkerIds(prev => [...prev, params.workerId]);
    }

    return newReq;
  };

  const updateRequestStatus = (requestId: string, status: RequestStatus) => {
    setRequests(prev => prev.map(req => {
      if (req.id === requestId) {
        return {
          ...req,
          status,
          updatedAt: new Date().toISOString()
        };
      }
      return req;
    }));
  };

  const updateWorkerAvailability = (workerId: string, status: Worker['availabilityStatus']) => {
    setWorkers(prev => prev.map(w => w.id === workerId ? { ...w, availabilityStatus: status } : w));
  };

  const resetDemoData = () => {
    localStorage.removeItem('thuna_user_profile');
    localStorage.removeItem('thuna_workers');
    localStorage.removeItem('thuna_reviews');
    localStorage.removeItem('thuna_trusted_ids');
    localStorage.removeItem('thuna_requests');
    setUserProfileState(DEFAULT_PROFILE);
    setWorkers(INITIAL_WORKERS);
    setReviews(INITIAL_REVIEWS);
    setTrustedWorkerIds(['w1', 'w2', 'w5']);
    setRequests([INITIAL_DEMO_REQUEST]);
    setActiveView('landing');
  };

  return (
    <AppContext.Provider value={{
      userProfile,
      setUserProfile,
      workers,
      reviews,
      trustedWorkerIds,
      requests,
      activeView,
      setActiveView,
      roleMode,
      setRoleMode,
      selectedCategory,
      setSelectedCategory,
      searchQuery,
      setSearchQuery,
      selectedWorkerForProfile,
      setSelectedWorkerForProfile,
      selectedWorkerForRequest,
      setSelectedWorkerForRequest,
      isEmergencyModalOpen,
      setIsEmergencyModalOpen,
      emergencyCategoryFilter,
      setEmergencyCategoryFilter,
      completeOnboarding,
      toggleSaveTrustedWorker,
      isWorkerSaved,
      recommendWorker,
      addReview,
      createServiceRequest,
      updateRequestStatus,
      updateWorkerAvailability,
      resetDemoData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
