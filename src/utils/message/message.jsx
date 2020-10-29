import Swal from "sweetalert2";

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

export const successMessage = (message) => {
  Toast.fire({
    icon: "success",
    title: message,
  });
};

export const errorMessage = (message) => {
  Toast.fire({
    icon: "error",
    title: message,
  });
};

export const warningMessage = (message) => {
  Toast.fire({
    icon: "warning",
    title: message,
  });
};
