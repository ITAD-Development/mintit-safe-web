import { ReactNode } from 'react';
import { Bounce, ToastOptions, toast } from 'react-toastify';

const globalOption: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  transition: Bounce
};

export class SystemToast {
  static success(message: ReactNode, option?: ToastOptions) {
    toast.success(message, { ...globalOption, ...option });
  }

  static error(message: ReactNode, option?: ToastOptions) {
    toast.error(message, { ...globalOption, ...option });
  }

  static info(message: ReactNode, option?: ToastOptions) {
    toast.info(message, { ...globalOption, ...option });
  }

  static warn(message: ReactNode, option?: ToastOptions) {
    toast.warn(message, { ...globalOption, ...option });
  }

  static default(message: ReactNode, option?: ToastOptions) {
    toast(message, { ...globalOption, ...option });
  }
}
