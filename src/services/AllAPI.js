import { commonApi } from "./CommonAPI.js";
import SERVER_URL from "./ServerURL.js";

export const registerAPI=async (user)=>{
    return await commonApi("POST",`${SERVER_URL}/register`,user,"")
}

export const userDetailsAPI=async ()=>{
    return await commonApi("GET",`${SERVER_URL}/studentlist`,"","")
}
