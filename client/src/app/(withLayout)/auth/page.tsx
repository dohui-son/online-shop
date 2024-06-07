import {
  useCreateKakaoToken,
  useKakaoUserInfo,
  useSignIn,
} from "@/lib/query/SocialLogin";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/navigation";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const user = null; //await getUserWithSession(context.req);

  return user
    ? {
        redirect: {
          destination: "/", //TODO: fix inteneded page or page befor login page
          permanent: false,
        },
      }
    : {
        props: {},
      };
}
export default function Auth() {
  const router = useRouter();

  // const {} = useSnsSignin(
  //   {
  //     code: router.query.code as string,
  //   },
  //   {
  //     enabled: !!router.query?.,
  //     onSuccess: (token) => {
  //       router.replace("/");//
  //     },
  //     onError: (e) => alert(e.message),
  //   }
  // );

  return <>Loading</>;
}
