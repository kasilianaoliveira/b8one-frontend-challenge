import { Cart } from "./cart";
import { IProductProps } from "./product";

export interface ICartItemProps {
  product: Cart;
  handleRemoveFromCart: (productId: string) => void;
  handleAddToCart: (product: IProductProps) => void;
  decreaseProductQuantity: (productId: string) => void;
}
