import { axiosInstance } from "../axiosInstance";
import { followUserPayload, userProfilePayload } from "./userInterface";

//get user profile:----
export const userProfile = async (payload: userProfilePayload) => {
  const response = await axiosInstance.post("/api/user_profile", payload);
  return response.data;
};
export const followeUser = async (payload: followUserPayload) => {
  const response = await axiosInstance.post("/api/followe_user", payload);
  return response.data;
};
