// src/components/customer/ThankYouToast.jsx
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showThankYouToast = (points = 12) => {
  toast.success(`Thanks for contributing! 🎉 You've earned ${points} points.`);
};

export const showRemainingFlagsToast = (remaining) => {
  if (remaining > 0) {
    toast.info(`${remaining} more flag${remaining === 1 ? '' : 's'} needed to alert staff.`);
  } else {
    toast.success("Staff has been alerted 🚨");
  }
};
