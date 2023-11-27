import React from 'react'
import { userList } from '../constants'
import userProfile from '../assets/image.png'
import { Trash2 } from 'lucide-react'
import TopPanel from './TopPanel'
import SearchBar from './SearchBar'

const AdminTable = () => {
    return (
        <div className='rounded-lg mx-5 h-full shadow-2xl mt-5 max-lg:text-xs '>
            <TopPanel name='Admin' />
            <SearchBar />
            <div className='flex gap-4 justify-around items-center w-full border-b-1 p-2 h-fit mt-9 font-bold max-lg:w-screen' id='table-header'>
                <div>Full Name</div>
                <div>Email</div>
                <div>Contact No.</div>
                <div>Role</div>
                <div>Status</div>
                <div>Action</div>
            </div>
            <div className=' w-full h-full items-center rounded-lg mt-1' id='table-content'>
                {userList.map((user, key) => {

                    return (
                        <div className='flex justify-around items-center w-full p-1 border-t-[0.5px] border-gray' key={key}>
                            <div className='flex gap-2 px-2 w-full justify-start items-center'>
                                <div className='w-10 h-10 rounded-full'>
                                    <img src={userProfile} alt="userImage" className='w-fit h-fit' />
                                </div>
                                {user['name']}</div>
                            <div className='w-full flex justify-center'>{user['email']}</div>

                            <div className='w-full flex justify-center'>{user['contact']}</div>

                            <div className='w-full flex justify-center'>{user['role']}</div>

                            <div className='w-full flex items-center justify-center'>
                                <p className={`py-1 text-center rounded-lg w-fit ${(user['status'] === 'Active') ? "text-[#00FF19] bg-[#0A3055] px-4" : "bg-[#F00] text-[#FFF] px-2"}`}>
                                    {user['status']}
                                </p>
                            </div>
                            
                            <div className='w-full flex items-center justify-around'>
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

export default AdminTable