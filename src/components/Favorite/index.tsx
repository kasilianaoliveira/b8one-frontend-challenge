import styles from './styles.module.css'
import { FavoriteItem } from '../FavoriteItem'
import { useFavoriteStore } from '../../stores/favoriteStore'
import { CloseOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
export const Favorite = () => {

  const { toggleFavoriteVisibility, favorites, isVisible, removeProductFromFavorites } = useFavoriteStore();
  useEffect(() => {
    isVisible ?
      document.body.style.overflow = 'hidden' :
      document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (

    <div className={`${styles['favorite-container']} ${isVisible && styles['favorite-visibility']}`}>
      <div className={styles['favorite-escape-area']} onClick={toggleFavoriteVisibility} />
      <div className={styles['favorite-content']}>
        <div className={styles['favorite-content-title']}>
          <h3 className={styles['favorite-title']}>Seus favoritos</h3>
          <button
            className={styles['favorite-item-button']}
            onClick={toggleFavoriteVisibility}
          >
            <CloseOutlined />
          </button>
        </div>
        {
          favorites.map(product => (
            <FavoriteItem key={product.id} product={product} removeProductFromFavorites={removeProductFromFavorites} />
          ))
        }

        {
          favorites.length === 0 && <p>Você não tem nenhum produto como favorito.</p>
        }
      </div>
    </div>
  )
}
