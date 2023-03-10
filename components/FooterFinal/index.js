import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';


function FooterFinal() {
    return (
        <footer className="bg-emerald-300 py-12">

            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                    <div className="px-5 py-2">
                        <Link href="/reserva">
                            <p className="text-black hover:text-white">Reserva</p>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/menu">
                            <p className="text-black hover:text-white">Menú</p>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/mezcal">
                            <p className="text-black hover:text-white">Mezcal</p>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/franquicias">
                            <p className="text-black hover:text-white">Franquicias</p>
                        </Link>
                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    
                    <a href="https://www.facebook.com/Lalloronacantinacdmx">
                        <FaFacebook className="w-6 h-6 text-blue-600 hover:text-white" />
                    </a>
                    <a href="https://www.instagram.com/cantinalallorona/">
                        <FaInstagram className="w-6 h-6 text-pink-600 hover:text-white"/>
                       
                       </a>
                </div>
            </div>
            <div className="pt-3">
                <p className='text-white text-center text-2xl'>La Llorona Copyright 2015</p>
            </div>
        </footer>
    )
}

export default FooterFinal