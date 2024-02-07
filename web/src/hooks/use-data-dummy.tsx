"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Tdata = {
  title: string;
  stock: number;
  price: number;
};

const getData = async (): Promise<Tdata[]> => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100",
    );
    const data = await response.data.products;
    return data;
  } catch (error) {
    throw error;
  }
};

export const useDataDummy = () => {
  return useQuery({
    queryKey: ["data-dummy"],
    queryFn: getData,
  });
};
