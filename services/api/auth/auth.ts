import { axiosInstance } from "../axiosInstance";
import { CheckOtpPayload, SendOtpPayload } from "./authInterface";

export const sendOtp = async (payload: SendOtpPayload) => {
  const response = await axiosInstance.post("/api/send_otp", payload);
  return response.data;
};

export const verifyOtp = async (payload: CheckOtpPayload) => {
  const response = await axiosInstance.post("/api/verify_otp");
  return response.data;
};
