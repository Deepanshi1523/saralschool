import LoginForm from "@/app/ui/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 border-black border-2 ">
        <div className="flex h-20 w-full items-end rounded-lg  p-3 ">
          <div className=" w-32 text-white md:w-36">
            <Image
            src="/saralschool.png"
            width={400}
            height={400}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}