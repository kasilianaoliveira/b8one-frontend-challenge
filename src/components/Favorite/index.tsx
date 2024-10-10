import styles from './styles.module.css'
import { FavoriteItem } from '../FavoriteItem'
import { useFavoriteStore } from '../../stores/favoriteStore'
export const Favorite = () => {

  const {  toggleFavoriteVisibility, favorites, isVisible, removeProductFromFavorites } = useFavoriteStore();

  return (

    <div className={`${styles['favorite-container']} ${isVisible && styles['favorite-visibility']}`}>
      <div className={styles['favorite-escape-area']} onClick={toggleFavoriteVisibility} />
      <div className={styles['favorite-content']}>
        <h3 className={styles['favorite-title']}>Seus favoritos</h3>
        {
          favorites.map(product => (
            <FavoriteItem key={product.id} product={product} removeProductFromFavorites={removeProductFromFavorites}/>
          ))
        }

        {
          favorites.length === 0 && <p>Você não tem nenhum produto como favorito.</p>
        }
      </div>
    </div>
  )
}
