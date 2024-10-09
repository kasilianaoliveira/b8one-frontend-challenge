import { IProductProps } from "./product";

export interface FavoriteProductCardProps {
  product: IProductProps;
  favorites: IProductProps[];
  handleFavoriteProduct: (product: IProductProps) => void;
}
