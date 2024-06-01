
import { API_BASE_URL } from "@/config/api"
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import axios from "axios"

export const register=userData=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})//current state in redux store is requesting register,since redux store is used to state management
    try{
        const {data}=await axios.post(`${API_BASE_URL}/auth/signup`,userData);
        if(data.jwt){

            localStorage.setItem("jwt",data.jwt)//store jwt in local storage
            dispatch({type:REGISTER_SUCCESS,payload:data})//Store current state in redux store for state management
        }
        console.log("Register successfully",data)
    }
    catch(error){
        console.log(error);
    }
}

export const login=userData=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const {data}=await axios.post(`${API_BASE_URL}/auth/signing`,userData);
        if(data.jwt){

            localStorage.setItem("jwt",data.jwt)
            dispatch({type:LOGIN_SUCCESS,payload:data})
        }
        console.log("Login successfully",data)
    }
    catch(error){
        console.log(error);
    }
}
export const getUser=()=>async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
        const {data}=await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("jwt")}`
            },
        });
                dispatch({type:GET_USER_SUCCESS,payload:data})


        console.log("Get User successfully",data)
    }
    catch(error){
        console.log(error);
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:LOGOUT,})
    localStorage.clear();
}
//Get method don't need body but post method need request body because in get method we want to
//retrive data from specific resource ,but in post method we send data to server so data object can be more complex
//so we need to send request body (request from server) with response to the server