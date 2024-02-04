import React from "react";
import { Toaster, toast } from "react-hot-toast";

const ToastComponent = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
    />
  );
};
export { toast, ToastComponent };
