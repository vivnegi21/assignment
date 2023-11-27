import React from 'react'
import { roleList } from '../constants'
import { Trash2 } from 'lucide-react'
import TopPanel from './TopPanel'
import SearchBar from './SearchBar'
const RoleTable = () => {
    return (
        <div className=' rounded-lg mx-5 h-fit shadow-2xl mt-5'>
            <TopPanel name='Role'/>
            <SearchBar/>
            <div className='flex gap-4 justify-around items-center w-full border-b-1 p-2 h-fit mt-9 font-bold' id='table-header'>
                <div>Roll Name</div>
                <div>No. Of Users</div>
                <div>Action</div>
            </div>
            <div className=' w-full mt-1 rounded-lg' id='table-content'>
                {roleList.map((user, key) => {
                    return (
                        <div className='flex justify-around items-stretch w-full p-2 border-t-[0.5px] border-gray' key={key}>
                            <div className='flex gap-2 px-2 w-full justify-center'>
                                {user['name']}
                            </div>

                            <div className='w-full flex justify-center'>{user['users']}</div>
                            <div className='w-full flex items-center justify-center gap-4' >
                                <button className='px-3 py-1 bg-[#0095FF] text-white rounded-lg'>View</button>
                                <button className='px-3 py-1 bg-[#F66] text-white rounded-lg'>Edit</button>
                                <Trash2 color="#ff0909" className='cursor-pointer' />
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default RoleTable