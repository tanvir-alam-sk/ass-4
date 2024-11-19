import {  HotelType } from "./dataDype";

// type ErrorDataFetch={
//     message:string,
// }

export const dataLoad= async(url:string):Promise<HotelType>=>{
const response=await fetch(`http://localhost:8000/hotel-details/${url}`)
return response.json()
}