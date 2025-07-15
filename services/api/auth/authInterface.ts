export interface SendOtpPayload {
  mobile_number: string;
  country_code: string;
  device_token: string;
  login_type: string;
  platform_type: string;
}

export interface CheckOtpPayload {
  mobile: string;
  country_code: string;
  otp: string;
}
