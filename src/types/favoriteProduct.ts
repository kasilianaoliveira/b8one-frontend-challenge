import { IProductProps } from "./product";

export interface IFavoriteProductCardProps {
  product: IProductProps;
  favorites: IProductProps[];
  handleFavoriteProduct: (product: IProductProps) => void;
}
