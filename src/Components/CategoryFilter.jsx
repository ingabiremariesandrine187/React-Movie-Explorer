
const categories = [
  "All", "Action", "Adventure", "Anime", "Comedy", "Crime", "Drama",
  "Espionage", "Family", "Fantasy", "History", "Horror", "Legal",
  "Medical", "Music", "Mystery", "Romance", "Science-Fiction",
  "Sports", "Supernatural", "Thriller", "War", "Western"
];

function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-6 mb-10">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-1 rounded-full border transition ${
            selected === cat
              ? "bg-[#c94e1e] text-white border-[#c94e1e]"
              : "bg-white text-[#7b3f1d] border-[#d1b6aa] hover:bg-[#fae7dc]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter