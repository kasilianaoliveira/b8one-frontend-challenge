import { IProductProps } from "./product";

export interface IFavoriteProductCardProps {
  product: IProductProps;
  handleFavoriteProduct: (product: IProductProps) => void;
  handleRemoveFromFavorites: (productId: string) => void;
}
