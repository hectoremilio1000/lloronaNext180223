import Link from 'next/link'
import React, { useState } from "react";
import Image from 'next/image'
import logo from '../../data/imagenes/logo_alta_sin_nombre.png'

// css navbar

// icons react
import { FaAlignRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './navbar.module.css'
import { useRouter } from 'next/navigation';


function NavBar() {
  const [current, setCurrent] = useState("");

  const navigate = useRouter();

  const cambiarComponent = e => {
    setCurrent(e.key);
    navigate.push(`${e.key}`)
  }

  return (

    <div className="header-container">
      <div className='row-qh'>

        {/* <Link href="/">
        <Image src={logo} width={100}
          alt="llorona" priority />

      </Link> */}
        <div className='header-logo'>
          <Link href="/" className="logo">
            <Image src={logo} width={100}
              alt="llorona" priority />
          </Link>
          <FaAlignRight
            className="toggle-icon"
            onClick={() => {
              handleNavbar();
            }}
          />
        </div>
        <div className='linkswraper'>
          <li key="0">
            <Link href="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li key="1">
            <Link href="/reserva" className="nav-link">
              Reserva
            </Link>
          </li>
          <li key="2">
            <Link href="/menullorona" className="nav-link">
              Menu
            </Link>
          </li>
          <li key="3">
            <Link href="/mezcal" className="nav-link">
              Mezcal
            </Link>
          </li>
          <li key="4">
            <Link href="/franquicias" className="nav-link">
              Franquicias
            </Link>
          </li>
        </div>
        <div className='header-icons'>
          <a key="0" href="https://www.facebook.com/Lalloronacantinacdmx" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon facebook-icon" />
          </a>
          <a key="1" href="https://www.instagram.com/cantinalallorona/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon instagram-icon" />
          </a>
        </div>
      </div>

    </div>

  )
}

export default NavBar