import { toast } from "react-toastify";

export const showError = message => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 1000
  });
};

export const showInfo = message => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 1000
  });
};

export const showSuccess = message => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 1000
  });
};
