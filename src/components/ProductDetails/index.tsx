import { IProductDetailsProps } from '../../types/productDetails';
import styles from './styles.module.css'

export const ProductDetails = ({
  title,
  originalPrice,
  salePrice,
}: IProductDetailsProps) => {

  const originalPriceConverted = originalPrice.toLocaleString('pt-br', { style: 'decimal', minimumFractionDigits: 2 });
  const salePriceConverted = salePrice.toLocaleString('pt-br', { style: 'decimal', minimumFractionDigits: 2 });
  const priceInstallment = (salePrice / 10).toLocaleString('pt-br', { style: 'decimal', minimumFractionDigits: 2 });

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
