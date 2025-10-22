import {useEffect,useState} from "react"
import { fetchMovies } from "../Utils/Api";
function useFetchMovies(){
    const [movies,setMovies] = useState([])
        const [loading,setLoading] = useState(true);

        useEffect(() => {
         fetchMovies().then(data => {
      setMovies(data);
      setLoading(false);   
        });

    },[]);
    return {movies,loading};
}
export default useFetchMovies