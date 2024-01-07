import { requestErrorHandler } from "@/helper/request-error";

const request = async <T,>(
  action: () => Promise<T>,
  options: {
    onData: (data: T) => void;
    onLoading?: (isLoading: boolean) => void;
  }
) => {
  try {
    options.onLoading?.(true);
    const data = await action();
    options.onData(data);
  } catch (err: any) {
    requestErrorHandler(err);
  } finally {
    options.onLoading?.(false);
  }
};

export default request;
