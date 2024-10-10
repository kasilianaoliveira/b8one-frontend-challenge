import { Cart } from "../../types/cart";
import { IProductProps } from "../../types/product";

export interface CartStoreState {
  cart: Cart[];
  productsTotalPrice: number;
  productCount: number;
  isCartVisible: boolean; 
  addToCart: (product: IProductProps) => void;
  removeProductFromCart: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
  clearCart: () => void;
  updateTotalPriceAndCount: () => void;
  toggleCart: () => void; 
  isProductInCart: (productId: string) => boolean;
}

export interface FavoriteStoreState {
  favorites: IProductProps[];
  isVisible: boolean;
  addProductToFavorites: (product: IProductProps) => void;
  removeProductFromFavorites: (productId: string) => void;
  toggleFavoriteVisibility: () => void;
  clearFavorites: () => void;
  isProductInFavorites: (productId: string) => boolean
}
