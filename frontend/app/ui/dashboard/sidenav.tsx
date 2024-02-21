// SideNav.tsx
import Link from 'next/link';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';
import { logoutAction } from '@/app/lib/auth/logout-action';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
  return (
    <nav className="bg-white py-1 px-5  md:py-2 md:px-2 flex-col items-center justify-between fixed top-0 w-full z-10">
      <div className="flex items-center space-x-10">
        <Link href="/">
          <div className="mr-4">
            <Image
              src="/saralschool.png"
              width={230}
              height={230}
              alt="logo"
            />
          </div>
        </Link>
        <NavLinks />
        <form
          action={async () => {
            'use server';
            await logoutAction();
          }}
        >
          <button className="flex h-[42px] grow items-center justify-center gap-2 rounded-md p-3 text-lg font-large hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <span className="md:block">Sign Out</span>
          </button>
        </form>
      </div>
    </nav>
  );
}
