import axios, {AxiosResponse} from "axios";

import {CartsResponseModel} from "../models/CartsResponseModel";

import {FullProductModel} from "../models/FullProductModel";

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {}
});
const getAllCarts = (): Promise<AxiosResponse<CartsResponseModel>> => {
    return axiosInstance.get('/carts')
}
const getProductById = (id: number):Promise<AxiosResponse<FullProductModel>> => {
  return  axiosInstance.get('/products/' + id)
}

export {
  getAllCarts,
    getProductById
};