
import { FETCH_CHAT_BY_PROJECT_SUCCESS, FETCH_CHAT_MESSSAGES_FAILURE, FETCH_CHAT_MESSSAGES_REQUEST, FETCH_CHAT_MESSSAGES_SUCCESS, FETCH_MESSAGES_FAILURE, FETCH_MESSAGES_REQUEST, FETCH_MESSAGES_SUCCESS, SEND_MESSAGE_FAILURE, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS } from "./ActionType";

const initialState={
   messages:[],
   loading:false,
   error:null,
   chat:null
}
const ChatReducer=(state=initialState,action)=>{
    switch (action.type){
        case FETCH_MESSAGES_REQUEST:
        case SEND_MESSAGE_REQUEST:
        case FETCH_CHAT_MESSSAGES_REQUEST:
            return {...state,loading:true,error:null};
        case FETCH_MESSAGES_SUCCESS:
        case FETCH_CHAT_MESSSAGES_SUCCESS:
            return {...state,loading:false,messages:action.messages};
        case SEND_MESSAGE_SUCCESS:
            return {...state,loading:false,messages:[...state.messages,action.message]};
        case FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {...state,loading:false,chat:action.chat};
        case SEND_MESSAGE_FAILURE:
        case FETCH_MESSAGES_FAILURE:
        case FETCH_CHAT_MESSSAGES_FAILURE:
            return {...state,loading:false,error:action.error};
       
        default:
          return state;
    }
}
export default ChatReducer;