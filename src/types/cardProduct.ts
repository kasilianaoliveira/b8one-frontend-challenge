import { IProductProps } from "./product";

export interface CardProductProps {
  product: IProductProps;
  addProduct: IProductProps[]
  favorites: IProductProps[]
  handleAddProduct: (product: IProductProps) => void
  handleFavoriteProduct: (product: IProductProps) => void
}
