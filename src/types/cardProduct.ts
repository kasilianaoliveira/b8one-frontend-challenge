import { IProductProps } from './product';

export interface CardProductProps {
  product: IProductProps;
  handleAddProduct: (product: IProductProps) => void;
  handleFavoriteProduct: (product: IProductProps) => void;
}
