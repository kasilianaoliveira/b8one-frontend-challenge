import { FC, useContext } from 'react';
import { IProductProps } from '../../types/product';
import { formatToLocaleString } from '../../utils/formatToLocaleString';
import styles from './styles.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { FavoriteContext } from '../../context/favoriteContext';
import { notification } from '../../utils/notification';

interface IFavoriteItemProps {
  product: IProductProps;
}

export const FavoriteItem: FC<IFavoriteItemProps> = ({ product }) => {
  const salePriceConverted = formatToLocaleString(product.salePrice)
  const { removeProductFromFavorites } = useContext(FavoriteContext)

  return (
    <div className={styles['favorite-item-container']}>
      <img src={product.image} className={styles['favorite-item-image']} />

      <div className={styles['favorite-item-details']}>
        <p className={styles['favorite-item-title']}>
          {product.title}
        </p>
        <p>R${salePriceConverted}</p>
      </div>

      <button
        className={styles['favorite-item-button']}
        onClick={() => {
          removeProductFromFavorites(product.id)
          notification('Produto removido dos favoritos!')
        }}
      >
        <CloseOutlined />
      </button>
    </div>
  )
}
