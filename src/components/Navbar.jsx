import React from 'react'
import styles from "../styles/Navbar.module.scss"
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFolderAdd,
    AiOutlineMail,
  } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiBook } from "react-icons/fi";
import ListItemLink from './ListItemLink';


const Navbar = () => {
  return (
    <div div className={styles.container}>
        <nav className={styles.nav}>
            <ul>
                {/* Home */}
                <ListItemLink url="">
                    <AiOutlineHome />
                        <h3>Home</h3>
                </ListItemLink>

                {/* About */}
                <ListItemLink url="about">
                    <AiOutlineUser/>
                        <h3>About Me</h3>
                </ListItemLink>

                {/* Resume */}
                <ListItemLink url="resume">
                    <HiOutlineDocumentText/>
                        <h3>Resume</h3>
                </ListItemLink>

                {/* Portfolio */}
                <ListItemLink url="portfolio">
                    <AiOutlineFolderAdd/>
                        <h3>Portfolio</h3>
                </ListItemLink>

                {/* Portfolio */}
                <ListItemLink url="blog">
                    <FiBook/>
                        <h3>Blog</h3>
                </ListItemLink>

                {/* Contact */}
                <ListItemLink>
                    <AiOutlineMail/>
                        <h3>Contact</h3>
                </ListItemLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar