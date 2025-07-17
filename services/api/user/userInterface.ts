export interface userProfilePayload {
  user_id: string;
  fist_name:string;
  last_name:string;
  email:string;
  username:string;
  bio:string;
  gender:string;
  avtar_id:string;
  profile_pic:string;
}

export interface getSecondUserProfilePayload {
    user_id:string;
}