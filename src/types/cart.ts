import { IProductProps } from  './product';

export interface Cart extends IProductProps{
  quantity: number;
}