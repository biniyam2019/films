import React from "react";
import Image from "next/dist/client/image";
import { useState } from "react";
import styles from "/styles/Navbar.module.css";
import SearchBar from "./Searchbar";
import hamburgermenu from '/public/img/menu.png'
import Link from "next/link";
function Navbar() {
  const [count,setCount] = useState(0);
    function right()
    {  
setCount((count + 1)%2);
console.log(count);
  

    }
  
   
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Image
              src='/img/BINIMOVIES_free-file.png'
              layout='fill'
              objectFit='contain'
              alt='logo'></Image>
          </div>
          <div
            className={styles.Hamburger}
            onClick={() => {
              right();
            }}>
            <Image src={hamburgermenu} alt='hamburger' height={40}></Image>
          </div>
        </div>
        <div className={styles.menu}>
          <ul
            className={styles.menulist}
            style={{ translate: `calc( 100vw *${count} ` }}
           >
            <li>
              <Link href='/'> Home</Link>
            </li>
            <li>
              <Link href='/'> About Us</Link>
            </li>
            <li>
              <Link href='/'> Contact Us</Link>
            </li>
            <li>
              <Link href='/'> Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
