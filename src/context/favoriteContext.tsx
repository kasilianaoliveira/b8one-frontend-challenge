import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { FavoriteContextData } from './contextTypes';
import { IProductProps } from '../types/product';

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteContext = createContext({} as FavoriteContextData);

export const FavoriteContextProvider: FC<FavoriteProviderProps> = ({
  children,
}: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<IProductProps[]>(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')!);
    return favoritesFromLocalStorage || [];
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')!);
    setFavorites(favoritesFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addProductToFavorites = (product: IProductProps) => {
    const isProductInFavorites = favorites.some((item) => item.id === product.id);

    if (!isProductInFavorites) {
      setFavorites((prevState) => [...prevState, product]);
    }
  };

  const removeProductFromFavorites = (productId: string) => {
    setFavorites((prevState) => prevState.filter((item) =>
      item.id !== productId));
  };

  const toggleFavorite = () => {
    setIsVisible((prevState) => !prevState);
  }

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addProductToFavorites,
        removeProductFromFavorites,
        clearFavorites,
        isVisible,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
