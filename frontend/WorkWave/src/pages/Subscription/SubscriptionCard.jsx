import { Button } from '@/components/ui/button'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { createPayment } from '../Redux/Payment/Action'

const SubscriptionCard = ({data}) => {

  const dispatch=useDispatch();

  const handleUpgrade=()=>{
    dispatch(createPayment({planeType:data.planeType,jwt:localStorage.getItem("jwt")}))
 
  };

  return (
    <div className='rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem]'>
      <p>{data.planeName}</p>
      <p>
        <span className='text-xl font-semibold'> ₹{data.price}/</span>
        <span>{data.planeType}</span>
      </p>

      {data.planeType=="ANNUALLY"&& <p className="text-green-500">30% off </p>}
    
        <Button className="w-full" onClick={handleUpgrade}>{data.buttonName}</Button>
    
        <div>
        {data.fetures.map((item)=>
        
            <div key={item} className='flex items-center gap-2'>
                <CheckCircledIcon/>
                <p>{item}</p>
            </div>
        )
        }
        </div>
    
    
    </div>

   
  )
}

export default SubscriptionCard
