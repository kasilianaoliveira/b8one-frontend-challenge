import { IProductDetailsProps } from '../../types/productDetails';
import { formatToLocaleString } from '../../utils/formatToLocaleString';
import styles from './styles.module.css'

export const ProductDetails = ({
  title,
  originalPrice,
  salePrice,
}: IProductDetailsProps) => {
  const INSTALLMENTS_COUNT = 10;
  
  const originalPriceConverted = formatToLocaleString(originalPrice);
  const salePriceConverted = formatToLocaleString(salePrice);
  const priceInstallment = formatToLocaleString((salePrice / INSTALLMENTS_COUNT))

  return (
    <div className={styles['info-content']}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles['pricing-details']}>
        <p className={styles['original-price']}>
          R$ {originalPriceConverted}
        </p>
        <p className={styles['promotional-price']}>
          R$ {salePriceConverted}
        </p>
        <p className={styles.installments}>
          em até {''}
          <span className={styles.quantity}>
            10x de R$ {priceInstallment}
          </span>
          {''} sem juros
        </p>
      </div>
    </div>
  )
}
