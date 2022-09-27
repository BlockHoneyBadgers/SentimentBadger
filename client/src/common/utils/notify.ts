import { toast } from 'react-toastify';

export const notify = (errorMessage: string) =>
  toast.error(errorMessage, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
