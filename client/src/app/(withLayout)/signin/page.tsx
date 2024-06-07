import { KAKAO_AUTH_URL } from "@/lib/constant/socialLogin";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  return (
    <button onClick={() => router.replace(KAKAO_AUTH_URL)}>
      카카오 로그인
    </button>
  );
}
