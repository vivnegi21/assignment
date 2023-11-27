import { PlusSquare, Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='p-4 rounded-lg mx-5 h-fit shadow-lg mt-5 flex justify-around'>
            <div className='flex items-center w-full'>
                <input type="text" placeholder="Search..." className='border rounded-lg w-1/2 ml-8 py-2 px-6 border-[#0A3055]' />
                <Search className='-ml-10 z-10' />
            </div>
            <button className='bg-[#F66] text-center gap-2 flex p-2 rounded-xl text-white items-center justify-center'>
                Add
                <PlusSquare />
            </button>
        </div>
    )
}

export default SearchBar