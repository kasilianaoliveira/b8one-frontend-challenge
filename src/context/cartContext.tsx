import { createContext, FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { CartContextData } from './contextTypes';
import { Cart } from '../types/cart';
import { IProductProps } from '../types/product';



interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export const CartContextProvider: FC<CartProviderProps> = ({
  children,
}: CartProviderProps) => {

  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<Cart[]>(() => {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem('a882252baaa825fa4154d23165e4543d91fb038a')!);
    return productsFromLocalStorage || [];
  });

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem('a882252baaa825fa4154d23165e4543d91fb038a')!
    )

    setProducts(productsFromLocalStorage)
  }, [])

  useEffect(() => {
    localStorage.setItem('a882252baaa825fa4154d23165e4543d91fb038a', JSON.stringify(products))
  }, [products])

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.salePrice * currentProduct.quantity
    }, 0)
  }, [products])

  const productCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity
    }, 0)
  }, [products])


  const toggleCart = () => {
    setIsVisible((prevState) => !prevState);
  }

  const addProductToCart = (product: IProductProps) => {

    const productIsAlreadyInCart = products.some(
      (item) => item.id === product.id
    )

    if (productIsAlreadyInCart) {

      return setProducts(prevState =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((products) =>
      products.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ).filter(product => product.quantity > 0)
    );
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((prevState) =>
      prevState.filter((item) => item.id !== productId)
    );
  };

  const clearProducts = () => {
    setProducts([])
  }


  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productCount,
        productsTotalPrice,
        toggleCart,
        clearProducts,
        addProductToCart,
        removeProductFromCart,
        decreaseProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};