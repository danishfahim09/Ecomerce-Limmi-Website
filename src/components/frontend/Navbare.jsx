"use client";

import SearchForm from '@/components/frontend/SearchForm';
import Link from 'next/link';
import Image from 'next/image';
import { User } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import HelperModel from '@/components/frontend/HelpeModel';
import CartCount from '@/components/frontend/CartCount';
import { useSession } from 'next-auth/react';
import UserAvater from '@/components/backoffice/UserAvater';

const Navbare = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    return (
        <div className='bg-gray-100 dark:bg-gray-700'>
            <div className="flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-9">

                <Link className='' href="/">
                    <Image
                        src="/applogo.png"
                        width={140}
                        height={140}
                        alt="Picture of the author"
                    />
                </Link>

                <div className="flex-grow">
                    <SearchForm />
                </div>

                <div>
                    {status === "unauthenticated" ? (
                        <Link href="/login" className='flex items-center space-x-1 text-green-950 dark:text-white'>
                            <User />
                            <span>Login</span>
                        </Link>
                    ) : (
                        <UserAvater user={session?.user} />
                    )}
                </div>

                <div className=''>
                    <HelperModel />
                </div>

                <CartCount />

                <button className='flex items-center space-x-1 text-green-950 dark:text-slate-100'>
                    <ThemeToggle />
                </button>
            </div>
        </div>
    );
};

export default Navbare;
