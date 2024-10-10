import { FC } from 'react';
import { IProductProps } from '../../types/product';
import { formatToLocaleString } from '../../utils/formatToLocaleString';
import styles from './styles.module.css';
import { CloseOutlined } from '@ant-design/icons';
import { notification } from '../../utils/notification';

interface IFavoriteItemProps {
  product: IProductProps;
  removeProductFromFavorites: (productId: string) => void;
}

export const FavoriteItem: FC<IFavoriteItemProps> = ({ product, removeProductFromFavorites }) => {
  const salePriceConverted = formatToLocaleString(product.salePrice)

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
