import Link from 'next/link'
import React, { useState } from "react";
import Image from 'next/image'
import logo from '../../data/imagenes/logo_alta_sin_nombre.png'
import './navbar.module.css'
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';

import {
  SmileOutlined,
  GlobalOutlined,
  FileSearchOutlined,
  DollarCircleOutlined,
  BorderOuterOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Menú", "sub1", null, [
    getItem("Reserva", "reserva", <SmileOutlined />),
    getItem("Menú", "menu", <FileSearchOutlined />),
    getItem("Mezcal", "mezcal", <DollarCircleOutlined />),
    getItem("Franquicias", "franquicias", <GlobalOutlined />),
  ]),
];


function NavBar() {
  const [current, setCurrent] = useState("");

  const navigate = useRouter();

  const cambiarComponent = e => {
    setCurrent(e.key);
    navigate.push(`${e.key}`)
  }

  return (

    <div className="Container" style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center' }}>

      <Link href="/">
        <Image src={logo} width={100}
          alt="llorona" priority />

      </Link>

      <Menu
        selectedKeys={current}
        onClick={cambiarComponent}
        mode="horizontal"
        items={items}
        className="menuPrincipal"
        style={{ minWidth: 100 }}
      />
    </div>

  )
}

export default NavBar