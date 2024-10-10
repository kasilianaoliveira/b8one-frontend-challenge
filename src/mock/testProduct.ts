import { IProductProps } from "../types/product";

export const produtos: IProductProps[] = new Array(10000).fill(null).map((_, index) => ({
  id: crypto.randomUUID(),
  title: `Produto ${index + 1}`,
  originalPrice: parseFloat((Math.random() * (3000 - 2000) + 2000).toFixed(2)),
  salePrice: parseFloat((Math.random() * (3000 - 1000) + 1000).toFixed(2)), 
  image: "assets/product-02.webp"
}));