import { Mail } from "lucide-react";
import toast, { ToastOptions } from "react-hot-toast";

const toastCustom = (html: JSX.Element | string | null, opt?: ToastOptions) => {
  return toast(html, { position: "top-center", duration: 2000, ...opt });
};

const notification = () => {
  return toastCustom(
    <div className="flex items-center">
      <Mail className="mr-2 animate-bounce text-primary" />
      <p>You have new message !</p>
    </div>,
  );
};

toastCustom.notification = notification;

export { toastCustom };
