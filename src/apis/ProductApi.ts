'use server'

import { base_url } from "@/utils";
import axios from "axios";

export const getProducts = async () => {
    const response = await axios.get(`${base_url}product`);
    return response.data;
  };
  
  