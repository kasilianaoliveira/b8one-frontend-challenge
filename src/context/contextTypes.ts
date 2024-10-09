import { Cart } from '../types/cart';
import { IProductProps } from '../types/product';

export interface CartContextData {
  isVisible: boolean;
  products: Cart[];
  productCount: number;
  productsTotalPrice: number;
  toggleCart: () => void;
  clearProducts: () => void;
  removeProductFromCart: (productId: string) => void;
  addProductToCart: (product: IProductProps) => void;
  decreaseProductQuantity: (productId: string) => void;
}

export interface FavoriteContextData {
  isVisible: boolean;
  favorites: IProductProps[];
  addProductToFavorites: (product: IProductProps) => void;
  removeProductFromFavorites: (productId: string) => void;
  clearFavorites: () => void;
  toggleFavorite: () => void;
}
