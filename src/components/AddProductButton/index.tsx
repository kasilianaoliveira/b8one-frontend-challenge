import { CheckOutlined } from '@ant-design/icons';
import { AddProductButtonProps } from '../../types/productButton';
import styles from './styles.module.css'


export const AddProductButton: React.FC<AddProductButtonProps> = ({
  onClick,
  label,
  isAddButton = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles['button-base']} ${isAddButton ? styles['button-add'] : styles['button-added']}`}
    >

      <CheckOutlined /> {label}
    </button>
  );
};
