import { notification } from "antd";
import { AxiosError } from "axios";

export const requestErrorHandler = (error: AxiosError<any>) => {
  if (error.response) {
    notification.error({
      message: error.response.data.message || error.message,
    });
    return;
  }
  if (error.request) {
    notification.error({ message: "Please check your internet connection!" });
    return;
  }
  notification.error({ message: "Can't not handle your request!" });
};
