import React, { useEffect } from 'react'
import { deleteRequest, getRequest } from '../Requests/Request'
import { useState } from 'react'
const Profile = () => {
    const [ data , setData ] = useState([])
    const fetchData = async () =>{
        try {
            const response = await getRequest('/product/product')
            setData(response.body)
            console.log(response.body)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
      fetchData()
    } , [])

    const hanldleDelete = async ( id ) =>{
        try {
            const response = await deleteRequest(`/product/delete/${id}`)
        fetchData()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='flex space-x-10  mx-12 mt-10'>

                <div className='w-1/6'>
                    <h1 className='text-2xl font-semibold bg-[#CA8A04] text-white px-10 rounded-lg py-2 hover:bg-black hover:text-white'>Profile</h1>
                    <h1 className='text-2xl font-semibold bg-[#CA8A04] text-white px-10 rounded-lg py-2 hover:bg-black hover:text-white mt-4'>Products</h1>
                </div>

                <div className='w-full'>
                    <div className="overflow-x-auto">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th className='text-lg text-black'></th>
                                    <th className='text-lg text-black'>Title</th>
                                    <th className='text-lg text-black'>Description</th>
                                    <th className='text-lg text-black'>Price</th>
                                    <th className='text-lg text-black'>Delete</th>
                                    <th className='text-lg text-black'>edit</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                data && data.map((item , index)=>(
                                    <tr>
                                    <th>{index+1}</th>
                                    <td className='text-lg text-black'>{item.title}</td>
                                    <td className='text-lg text-black'>{item.desc}</td>
                                    <td className='text-lg text-black'>{item.price}</td> 
                                    <td className='text-red-700 font-semibold' onClick={(()=> hanldleDelete(item._id))}>Delete</td> 
                                </tr>
                                ))
                               }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Profile