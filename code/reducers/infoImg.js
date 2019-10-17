export default function (state = null, action){
    switch(action.type){
        case "IMG_INFO":
            return action.payload;    

        break;
         
        default: return state;
    }
}