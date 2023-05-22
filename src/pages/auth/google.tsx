import { UserService } from "@/services/userService";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const sendCode = async () => {
      try {
        const params = document.location.search;
        const { data } = await UserService.authWithGoogle(params);
        console.log(data);
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    };

    sendCode();
  }, []);

  return <>Redirecting...</>;
}
