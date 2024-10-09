import { CheckOutlined } from '@ant-design/icons';
import styles from  './styles.module.css'
import { IAddProductButtonProps } from '../../types/productButton';


export const AddProductButton: React.FC<IAddProductButtonProps> = ({
  onClick,
  label,
  isAddButton = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles['button-base']} ${isAddButton ? styles['button-add'] : styles['button-added']}`}
    >
      {
        isAddButton ? (
          <span>{label}</span>
        ) : (
          <span>
            <CheckOutlined /> {label}
          </span>
        )
      }
      
    </button>
  );
};
