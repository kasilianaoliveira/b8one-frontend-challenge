import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { FC } from "react";
import styles from './styles.module.css'
import { FavoriteProductCardProps } from "../../types/favoriteProduct";

export const FavoriteIcon: FC<FavoriteProductCardProps> = ({ product, favorites, handleFavoriteProduct }) => {

  const isProductFavorited = (productId: string) => {
    return favorites.some((item) => item.id === productId);
  }
  return (
    <>
      {
        isProductFavorited(product.id) ? (
          <HeartFilled
            onClick={() => handleFavoriteProduct(product)}
            style={{
              fontSize: '21px',

            }}
            className={
              `${styles['favorite-icon']} ${styles['favorite-icon--filled']}`
            }
          />

        ) : (
          <HeartOutlined
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
