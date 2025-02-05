

import SearchForm from '@/components/frontend/SearchForm'
import Link from 'next/link';
import Image from 'next/image';
import { HelpCircle, HelpCircleIcon, ShoppingCart, User } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import HelperModel from '@/components/frontend/HelpeModel'
//import { Button } from 'flowbite-react';
///import logo from '/../../../public/applogo.png'

const Navbare = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-700' >
            <div className=" flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-9">
                {/* logo*/}
                <Link className='' href="/">
                    <Image
                        src="/applogo.png"
                        width={140}
                        height={140}
                        alt="Picture of the author"
                    />
                </Link>
                <SearchForm />
                <div >
                    <Link href="/login" className='flex items-center space-x-1 text-green-950 dark:text-white'>
                        <User />
                        <span>User</span>
                    </Link>
                </div>
                <div className=''>

                    <HelperModel />
                </div>

                <Link href="/cart" className='flex items-center space-x-1 text-green-950 dark:text-white'>
                    <ShoppingCart />
                </Link>
                <button className='flex items-center space-x-1 text-green-950 dark:text-slate-100'>
                    <ThemeToggle />
                </button>
            </div>
        </div>
    );
};
export default Navbare;