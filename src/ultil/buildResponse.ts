// gkc_hash_code : 01ERNTQXRDAFHMG3Q0VS9Q3CDE

import { getCurrentJPMoment } from "./datetime";

const buildError = (error: any, message = null) => {
  return {
    timestamp: getCurrentJPMoment().toDate(),
    success: false,
    errors: [error],
    message: message,
  };
};

const buildSuccess = (message: string, data: any = null) => {
  return {
    timestamp: getCurrentJPMoment(),
    success: true,
    data: data,
    message: message,
  };
};

export { buildError, buildSuccess };
