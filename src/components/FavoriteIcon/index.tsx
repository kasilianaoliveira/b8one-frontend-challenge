import { HeartFilled, HeartOutlined } from "@ant-design/icons"
import { useState } from "react";
import styles from './styles.module.css'
export const FavoriteIcon = () => {
  const [isFavorited, setIsFavorited] = useState(false);


  const addToFavorites = () => {
    setIsFavorited(!isFavorited)
    // setFavorites((prevFavorites) => {
    //   if (prevFavorites.some((item) => item.id === product.id)) {
    //     return prevFavorites; 
    //   }
    //   return [...prevFavorites, product];
    // });
  };
  return (
    <>
      {
          isFavorited ? (
            <HeartFilled
              onClick={addToFavorites}
              style={{
                fontSize: '21px',

              }}
              className={
                `${styles['favorite-icon']} ${styles['favorite-icon--filled']}`
              }
            />

          ) : (
            <HeartOutlined
              onClick={addToFavorites}
              style={{ fontSize: '21px' }}
              className={
                `${styles['favorite-icon']} ${styles['favorite-icon--outlined']}`
              } />
          )
        }
    </>
  )
}
