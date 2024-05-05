import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { REDIRECT_URI } from "../constant/socialLogin";

export const useSignIn = (
  params: { code: string },
  options: {
    onSuccess?: (data: string) => void;
    onError?: (e: Error) => void;
    enabled?: boolean;
  } = {}
) =>
  useQuery(
    [params.code],
    async () => (await axios.post(`/signinWithCode`, params.code)).data, // TODO: server
    {
      retry: false,
      ...options,
    }
  );

// TODO: relocate to server
export const useCreateKakaoToken = (
  params: {
    code: string;
  },
  options: {
    onSuccess?: (data: string) => void;
    onError?: (e: Error) => void;
    enabled?: boolean;
  } = {}
) =>
  useQuery(
    [params.code],
    async () =>
      (
        await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${params.code}&client_secret=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET}`,
          {},
          {
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        )
      ).data,
    {
      retry: false,
      ...options,
    }
  );

// TODO: relocate to server
export const useKakaoUserInfo = () =>
  useMutation(
    async (accessToken: string) =>
      (
        await axios.get(
          `https://kapi.kako.com/v2/user/me`,

          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        )
      ).data
  );
