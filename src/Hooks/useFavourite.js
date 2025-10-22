import { useState,useEffect } from "react";
function useFavorites(){
const [favorites, setFavorites] = useState(() =>{
 const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
});
useEffect(() =>{
       localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);
const toggleFavourite = (movie) => {
    setFavorites((prev) =>
prev.some((fav) => fav.id === movie.id)
        ? prev.filter((fav) => fav.id !== movie.id)
        : [...prev, movie]
);
};

const isFavorite = (id) => favorites.some((fav) => fav.id === id);
 return { favorites, toggleFavorite, isFavorite };

}
export default useFavorites