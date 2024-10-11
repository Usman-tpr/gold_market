import React from 'react'
import { getRequest, postRequest } from '../Requests/Request'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Notification from '../Components/Notification';

const SinglePage = () => {
    const [data, setData] = useState([])
    const [instruction, setInstruction] = useState(false)
    const [sellerDetails, setSellerDetails] = useState([])
    const [buyerDetails, setBuyerDetails] = useState([])
    const [notification, setNotification] = useState({ show: false, message: '' });

    const location = useLocation();
    const navigate = useNavigate();
    const { id } = location.state;

    const fetchData = async () => {
        try {
            const response = await getRequest(`/product/product/${id}`)
            setData(response.body)

            const seller = await getRequest(`/user/${response.body.userId}`)
            console.log(seller)
            setSellerDetails(seller)
            const buyer = await getRequest(`/user`)
            setBuyerDetails(buyer)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    const handleNotification = async () => {
        if(localStorage.getItem("g_token")){
            setNotification({ show: true, message: 'Our Team Will Contact You Soon! ' });
            const resp = await postRequest("/product/add-deal", { seller: sellerDetails, buyer: buyerDetails })
        }
        else{
       navigate("/signup")
        }

    }

    return (
        <>
            <div className='mt-10 flex space-x-10 mx-12'>
                {data.images && <img src={`http://localhost:5000/${data.images[0]}`} className='w-96 rounded-sm' alt="" />}
                <div>
                    <h1 className='text-2xl'>{data.title}</h1>
                    <h1 className='text-lg mt-4'>{data.desc}</h1>
                    <h1 className='text-lg mt-4 text-red-600'>RS.{data.price}</h1>
                    <h1 className='text-white bg-yellow-500 rounded-2xl px-5 py-2 w-48 mt-5 text-2xl font-semibold' onClick={handleNotification}> Buy It Now</h1>
                </div>
            </div>

            <Notification
                show={notification.show}
                message={notification.message}
                onClose={() => setNotification({ show: false, message: '' })}
            />

        </>
    )
}

export default SinglePage