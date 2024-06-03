import api from "@/config/api"

export const createPayment=async({planeType,jwt})=>{

    try{

        const {data}=await api.post(`/api/payment/${planeType}`);
        window.location.href=data.payment_link_url;

    }
    catch(error){
        console.log("payment error:",error)
    }
}