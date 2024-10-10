import { IProductProps } from './product';

export interface CardProductProps {
  product: IProductProps;
  handleAddToCart: (product: IProductProps) => void;
  handleRemoveFromCart: (productId: string) => void;
  handleAddToFavorites: (product: IProductProps) => void;
  handleRemoveFromFavorites: (productId: string) => void;
}
