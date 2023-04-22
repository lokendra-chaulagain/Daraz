import { toast } from "react-toastify";

export const DeleteToaster = (deleteFunction: (id: string) => Promise<any>, id: string, pendingMsg: string, successMsg: string, errorMsg: string) => {
  toast
    .promise(
      deleteFunction(id),
      {
        pending: pendingMsg,
        success: successMsg,
        error: errorMsg,
      },
      {
        progressClassName: "toast-progress",
        className: "toast-background",
      }
    )
    .catch(() => {
      toast.error(errorMsg);
    });
};

export const CreateToaster = (apiCall: () => Promise<any>, pendingMsg: string, successMsg: string, errorMsg: string) => {
  toast
    .promise(
      apiCall(),
      {
        pending: pendingMsg,
        success: successMsg,
        error: errorMsg,
      },
      {
        progressClassName: "toast-progress",
        className: "toast-background",
      }
    )
    .catch(() => {
      toast.error(errorMsg);
    });
};
