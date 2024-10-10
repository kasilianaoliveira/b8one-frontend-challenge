import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartStoreState } from './types';


export const useCartStore = create<CartStoreState>()(
  persist(
    (set, get) => {
      const updateTotalPriceAndCount = () => {
        const { cart } = get();
        const totalPrice = cart.reduce((acc, currentProduct) => {
          return acc + currentProduct.salePrice * currentProduct.quantity;
        }, 0);

        const totalCount = cart.reduce((acc, currentProduct) => {
          return acc + currentProduct.quantity;
        }, 0);

        set({ productsTotalPrice: totalPrice, productCount: totalCount });
      };

      return {
        cart: [],
        productsTotalPrice: 0,
        productCount: 0,
        isCartVisible: false,
        
        addToCart: (product) => {
          set((state) => {
            const productIsAlreadyInCart = state.cart.some((item) => item.id === product.id);

            if (productIsAlreadyInCart) {
              return {
                cart: state.cart.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
              };
            }

            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
            };
          });

          updateTotalPriceAndCount();
        },

        removeProductFromCart: (productId) => {
          set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== productId);
            return { cart: updatedCart };
          });

          updateTotalPriceAndCount(); 
        },

        decreaseProductQuantity: (productId) => {
          set((state) => {
            const updatedCart = state.cart
              .map((product) =>
                product.id === productId
                  ? { ...product, quantity: product.quantity - 1 }
                  : product
              )
              .filter((product) => product.quantity > 0);

            return { cart: updatedCart };
          });

          updateTotalPriceAndCount();
        },

        clearCart: () => {
          set({ cart: [] });
          localStorage.removeItem('cart-data'); 
        },

        updateTotalPriceAndCount,

        toggleCart: () => {
          set((state) => ({ isCartVisible: !state.isCartVisible })); 
        },

        isProductInCart: (productId) => {
          const state = get();
          return state.cart.some(item => item.id === productId);
        },
      };
    },
    {
      name: 'cart-data',
      storage: createJSONStorage(() => localStorage),
    }
  )
);