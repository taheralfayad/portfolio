import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import '../App.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 flex items-center justify-between p-6 bg-gray-900 z-10">
        <div className="text-white text-xl font-poppins">
            <h1 className="text-4xl flicker-effect">Ahmad Altaher Alfayad</h1>
        </div>
        <div className="relative">
            <div className="lg:hidden">
                <button type="button" className="text-white" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <CSSTransition in={isOpen} timeout={200} classNames="my-node">
                <ul className={`transform translate-y-2 overflow-hidden origin-top-right transition-all duration-200 ease-in-out bg-gray-900 text-white flex flex-col space-y-2 py-2 px-4 rounded ${isOpen ? 'block' : 'hidden'} lg:static lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 lg:bg-transparent lg:rounded-none lg:transform-none`}>
                    <li className="text-white cursor-pointer" onClick={() => setIsOpen(false)}><p className="font-poppins">Home</p></li>
                    <li className="text-white cursor-pointer font-poppins" onClick={() => setIsOpen(false)}>About</li>
                    <li className="text-white cursor-pointer font-poppins" onClick={() => setIsOpen(false)}>Contact</li>
                </ul>
            </CSSTransition>
        </div>
    </nav>
  );
}