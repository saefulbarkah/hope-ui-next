"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Tdata = {
  title: string;
  stock: number;
  price: number;
};

export const useDataDummy = () => {
  const [data, setData] = useState<Tdata[]>([]);

  const fetch = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100",
      );
      const data = await response.data.products;
      setData(data);
      return data;
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return { data };
};
