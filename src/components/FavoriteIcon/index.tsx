import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { FC, useContext } from 'react';
import styles from './styles.module.css'
import { IFavoriteProductCardProps } from '../../types/favoriteProduct';
import { FavoriteContext } from '../../context/favoriteContext';
import { notification } from '../../utils/notification';

export const FavoriteIcon: FC<IFavoriteProductCardProps> = ({ product, favorites, handleFavoriteProduct }) => {
  const { removeProductFromFavorites } = useContext(FavoriteContext)
  const isProductFavorited = (productId: string) => {
    return favorites.some((item) => item.id === productId);
  }


  return (
    <>
      {
        isProductFavorited(product.id) ? (
          <HeartFilled
            onClick={() => {
              removeProductFromFavorites(product.id)
              notification('Produto removido dos favoritos!')}
            }
            style={{
              fontSize: '21px',

            }}
            className={
              `${styles['favorite-icon']} ${styles['favorite-icon--filled']}`
            }
          />

        ) : (
          <HeartOutlined
            onClick={() => {
              handleFavoriteProduct(product)
              notification('Produto adicionado aos favoritos!')
            }}
            style={{ fontSize: '21px' }}
            className={
              `${styles['favorite-icon']} ${styles['favorite-icon--outlined']}`
            } />
        )
      }
    </>
  )
}
