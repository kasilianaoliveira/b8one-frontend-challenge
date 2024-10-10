import { IProductProps } from "./product";

export interface ICarButtonProps {
  productId:string;
  product: IProductProps;
  handleAddToCart: (product: IProductProps) => void;
  handleRemoveFromCart: (productId: string) => void;
}
