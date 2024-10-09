import { useContext } from 'react'
import styles from './styles.module.css'
import { FavoriteContext } from '../../context/favoriteContext'
import { FavoriteItem } from '../FavoriteItem'
export const Favorite = () => {
  const { isVisible, toggleFavorite, favorites } = useContext(FavoriteContext)

console.log(isVisible)
  return (

    <div className={`${styles['favorite-container']} ${isVisible && styles['favorite-visibility']}`}>
      <div className={styles['favorite-escape-area']} onClick={toggleFavorite} />
      <div className={styles['favorite-content']}>
        <h3 className={styles['favorite-title']}>Seus favoritos</h3>
        {
          favorites.map(product => (
            <FavoriteItem key={product.id} product={product} />
          ))
        }

        {
          favorites.length === 0 && <p>Você não tem nenhum produto como favorito.</p>
        }
      </div>
    </div>
  )
}
