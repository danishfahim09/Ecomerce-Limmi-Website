

import SearchForm from '@/components/frontend/SearchForm'
import Link from 'next/link';
import Image from 'next/image';
import { HelpCircle, ShoppingCart, User } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import HelperModel from '@/components/frontend/HelpeModel'
//import { Button } from 'flowbite-react';
///import logo from '/../../../public/applogo.png'

const Navbare = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-700' >
            <div className=" flex items-center justify-between py-3 w-full mx-auto px-8 gap-8">
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
                <div className='flex items-center space-x-1 text-green-950 dark:text-white'>
                    <HelpCircle />
                    <span>Help</span>
                </div>
                <button type="button" class="relative inline-flex items-center p-2 text-sm font-medium text-center text-green-600  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none    ">
                    <ShoppingCart />
                    <span class="sr-only">Notifications</span>
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-1 dark:border-gray-900">20</div>
                </button>
                
                <HelperModel />
                
                <button>
                    <ThemeToggle />
                </button>
            </div>
        </div>
    );
};
export default Navbare;