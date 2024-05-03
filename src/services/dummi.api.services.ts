import axios, {AxiosResponse} from "axios";

import {CartsResponseModel} from "../models/CartsResponseModel";

  const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers:{}
});
  const getAllCarts = ():Promise<AxiosResponse<CartsResponseModel[]> >=>{
      return axiosInstance.get('./carts')
  }

  export {getAllCarts};