import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { FC } from 'react';
import styles from './styles.module.css'
import { IFavoriteProductCardProps } from '../../types/favoriteProduct';
import { useFavoriteStore } from '../../stores/favoriteStore';

export const FavoriteIcon: FC<IFavoriteProductCardProps> = ({
  product,
  handleRemoveFromFavorites,
  handleFavoriteProduct
}) => {

  const { isProductInFavorites } = useFavoriteStore();
  const isProductFavorited = isProductInFavorites(product.id);

  return (
    <>
      {
        isProductFavorited ? (
          <HeartFilled
            data-testid='favorite-product-remove'
            onClick={() => handleRemoveFromFavorites(product.id)}
            style={{
              fontSize: '21px',
            }}
            className={
              `${styles['favorite-icon']} ${styles['favorite-icon--filled']}`
            }
          />

        ) : (
          <HeartOutlined
            data-testid='favorite-product-add'
            onClick={() => handleFavoriteProduct(product)}
            style={{ fontSize: '21px' }}
            className={
              `${styles['favorite-icon']} ${styles['favorite-icon--outlined']}`
            } />
        )
      }
    </>
  )
}
