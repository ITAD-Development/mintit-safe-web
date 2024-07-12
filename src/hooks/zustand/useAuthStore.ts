import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthStoreParams = {
  accessToken?: string;
  accessTokenExpiresIn?: number;
  accessTokenCreatedAt?: number;
  refreshToken?: string;
  refreshTokenExpiresIn?: number;
  refreshTokenCreatedAt?: number;
  serviceId: string;
  isHydrated: boolean;
};
type AuthStoreActions = {
  setIsHydrated: (isHydrated: boolean) => void;
  setServiceId: (serviceId: string) => void;
  save: (params: {
    accessToken?: string;
    accessTokenExpiresIn?: number;
    accessTokenCreatedAt?: number;
    refreshToken?: string;
    refreshTokenExpiresIn?: number;
    refreshTokenCreatedAt?: number;
  }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStoreParams & AuthStoreActions>()(
  persist(
    (set, get) => ({
      accessToken: undefined,
      accessTokenExpiresIn: undefined,
      accessTokenCreatedAt: undefined,
      refreshToken: undefined,
      refreshTokenExpiresIn: undefined,
      refreshTokenCreatedAt: undefined,
      serviceId: 'lf6SPZJ1QDSqZXD6h5wc9Q',
      isHydrated: false,
      save: (params: {
        accessToken?: string;
        accessTokenExpiresIn?: number;
        accessTokenCreatedAt?: number;
        refreshToken?: string;
        refreshTokenExpiresIn?: number;
        refreshTokenCreatedAt?: number;
      }) => {
        set({ ...params });
      },
      logout: () => {
        set({
          accessToken: undefined,
          accessTokenExpiresIn: undefined,
          accessTokenCreatedAt: undefined,
          refreshToken: undefined,
          refreshTokenExpiresIn: undefined,
          refreshTokenCreatedAt: undefined
        });
      },
      setIsHydrated: isHydrated => {
        set({ isHydrated });
      },
      setServiceId: serviceId => {
        set({ serviceId });
      }
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      onRehydrateStorage(state) {
        state.isHydrated = true;
        console.log('onRehydrateStorage', state);
      }
    }
  )
);
