"use client";

import Layout from "@/components/Layout";
import Profile from "@/components/Profile";

import { posts } from "@/mocks/posts";
import { media } from "@/mocks/media";
import { userProfilePayload } from "services/api/user/userInterface";
import { userProfile } from "services/api/user/userServices";
import { useEffect } from "react";
import { useUserStore } from "@/store/userstore/userStore";

const ProfileScreen = () => {
  const { setUser, user } = useUserStore()

  const fetchProfile = async (paylod: userProfilePayload) => {
    try {
      const res = await userProfile(paylod);
      console.log(res)
      setUser(res?.user_data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!user) {
      fetchProfile("2")
    }
  }, [])
  return (
    <Layout rightSidebar rightSidebarActiveTrending>
      <Profile
        background="/images/background-1.jpg"
        avatar={user?.profile_pic}
        name={`${user?.first_name} ${user?.last_name}`}
        login={user?.username ?? "User"}
        link="https://linktr.ee/jonDoe"
        followers={user?.followers ?? ''}
        posts={posts}
        postFeatured={[posts[5], posts[3], posts[2]]}
        media={media}
        isFollowing={false}
        own
        bio={user?.bio ?? ''}

      />
    </Layout>
  );
};

export default ProfileScreen;
