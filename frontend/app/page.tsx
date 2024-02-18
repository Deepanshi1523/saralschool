import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

import Link from "next/link";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex justify-between h-15 shrink-0 items-end rounded-lg p-3 md:h-25">
        <Image
            src="/saralschool.png"
            width={400}
            height={400}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center md:h-25 gap-6 rounded-lg bg-white-50 px-6 py-10 md:w-2/5 md:px-15">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-4xl md:leading-normal`}
          >
            <strong>Welcome to SaralSchool.</strong> Advance your engineering skills with us.{" "}
          </p>
          <div className="flex grow flex-col gap-4 md:flex-row">
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
          <Link
            href="/register"
            className="flex items-center bg-black text-white gap-5 self-start rounded-lg px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-400 md:text-base"
          >
            <span>Register</span>
          </Link>
        </div>
        </div>
        <div className="flex justify-center md:w-3/5 md:px-28">
        <Image
            src="/bg1.png"
            width={400}
            height={400}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop and mobile versions"
          />
        </div>
      </div>
    </main>
  );
}
