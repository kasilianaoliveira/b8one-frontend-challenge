import { FC } from 'react';
import { useCartStore } from '../../stores/cartStore';
import { AddProductButton } from '../AddProductButton';
import { ICarButtonProps } from '../../types/cardButton';


const CartButton: FC<ICarButtonProps> = ({
  productId,
  product,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const { isProductInCart } = useCartStore();
  const isProductAdded = isProductInCart(productId); // Verifica se o produto está no carrinho

  const handleButtonClick = () => {
    if (isProductAdded) {
      handleRemoveFromCart(productId);
    } else {
      handleAddToCart(product);
    }
  };

  return (
    <AddProductButton
      onClick={handleButtonClick}
      isAddButton={!isProductAdded}
      label={isProductAdded ? 'Adicionado' : 'Adicionar'}
    />
  );
};

export default CartButton;
