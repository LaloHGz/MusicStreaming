import Image from 'next/image';
import logo from '../../public/images/logo.png';

const NavBar = () => {
    return (
        <div>
            <nav className="top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <Image src={logo} className="h-11 w-11 mr-3" alt="IndieVibe Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">IndieVibes</span>
                        </div>


                        <div className="flex">
                            <div className="flex items-center gap-5">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Lalo</span>
                                <img className="w-8 h-8 rounded-full" src="https://i.pinimg.com/750x/ca/05/70/ca0570a9544212e5475dfdd5bda08502.jpg" alt="user photo" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;