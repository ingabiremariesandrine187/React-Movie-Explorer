import React from 'react'
import {Search} from "lucide-react";
function SearchBar({value, onChange}) {
  return (
    
      <div className='max-w-xl mx-auto mb-10 flex items-center bg-white rounded-full shadow px-4 py-2'>
      <Search className='text-[#a63f16]'/>
     <input
     type="text"
     placeholder="Search for movies.."
     value={value}
     onChange={(e) => onChange(e.target.value)}
     className='flex-1 px-3 py-2 outline-none bg-transparent text-[#7b3f1d]'
     />
      </div>
    
  );
}

export default SearchBar
