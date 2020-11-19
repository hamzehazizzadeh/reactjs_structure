import Swal from "sweetalert2";

export const toastSuccessMessage = (message) => {
  Toast.fire({
    icon: "success",
    title: message,
  });
};

export const toastErrorMessage = (message) => {
  Toast.fire({
    icon: "error",
    title: message,
  });
};

export const toastWarningMessage = (message) => {
  Toast.fire({
    icon: "warning",
    title: message,
  });
};

export const deliverySuccessMessage = (message, redirectUrl) => {
  Swal.fire({
    icon: "success",
    html: `<h5> ${message} </h5>`,
    confirmButtonText: "تایید",
    onClose: () => {
      window.location.href = redirectUrl;
    },
  });
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  showCloseButton: true,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
