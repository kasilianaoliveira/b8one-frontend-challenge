import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { FavoriteStoreState } from './types';


export const useFavoriteStore = create<FavoriteStoreState>()(
  persist(
    (set, get) => ({
      favorites: [],
      isVisible: false,

      addProductToFavorites: (product) => {
        set((state) => {
          const isProductInFavorites = state.favorites.some((item) => item.id === product.id);
          if (!isProductInFavorites) {
            return { favorites: [...state.favorites, product] };
          }
          return state;
        });
      },

      removeProductFromFavorites: (productId) => {
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== productId),
        }));
      },

      toggleFavoriteVisibility: () => {
        set((state) => ({ isVisible: !state.isVisible }));
      },

      clearFavorites: () => {
        set({ favorites: [] });
      },

      isProductInFavorites: (productId) => {
        const state = get();
        return state.favorites.some(item => item.id === productId);
      },
      
    }),
    {
      name: 'favorites-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
);
