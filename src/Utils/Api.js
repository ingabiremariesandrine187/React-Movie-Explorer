export async function fetchMovies(){
    const res = await fetch("https://api.tvmaze.com/shows");
    const data = await res.json();
    return data;

}