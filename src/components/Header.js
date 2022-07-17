import { MenuAlt3Icon , XCircleIcon} from '@heroicons/react/outline'
import classNames from 'classnames';
import { useState } from "react";
import { Link } from "react-router-dom";



const Header = ()=>{
    const [ toggleMenu , setToggleMenu ] = useState(false);

    return( 
        <>
        {/* Desktop Header */}
        <header className="text-gray-600 body-font hidden md:block">
            <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={process.env.PUBLIC_URL + '/logo.png'}  alt="site name"/>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link to="/" className="mr-5 hover:text-gray-900">Home </Link>
                <Link to="/community" className="mr-5 hover:text-gray-900">Community</Link>
                <Link to="/contact" className="mr-5 hover:text-gray-900">Get A Quote</Link>
                </nav>
                <Link to="/register" className="bg-[#217BF4] inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none rounded-full py-2 px-10 text-base mt-4 md:mt-0">
                    Sign Up
                </Link>
            </div>
        </header>
        {/* Mobile Header */}
        <header className="text-gray-600 body-font block md:hidden">
            <div className="container mx-auto flex flex-wrap p-2 items-center justify-between">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900">
                    <img src={process.env.PUBLIC_URL + '/logo.png'}  alt="site name"/>
                </Link>
                <button onClick={ ()=>{ setToggleMenu(true) } }>
                    <MenuAlt3Icon className='text-black w-6 h-6'/>
                </button>
            </div>
        </header>
        {/* Mobile drawer menu */}  
        { toggleMenu && 
            <div className={classNames("fixed top-0 left-0 z-50 opacity-90 bg-white h-screen w-screen" , toggleMenu ? "animate-in" : "animate-out")  }>
                <button onClick={ ()=> {setToggleMenu(false) }} className="absolute top-2 right-2">
                    <XCircleIcon className='text-black w-6 h-6 '/>
                </button>
                <div className="container p-8">
                    <nav className="md:ml-auto md:mr-auto flex pt-28 flex-col flex-wrap items-start text-base justify-center">
                        <Link to="/" className="hover:text-gray-900 text-lg">Home </Link>
                        <Link to="/community" className="hover:text-gray-900 text-lg">Community</Link>
                        <Link to="/contact" className="hover:text-gray-900 text-lg">Get A Quote</Link>
                    </nav>
                </div>
            </div>
         }
        </>
    )




}



export default Header;