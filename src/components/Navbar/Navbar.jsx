import React, { useEffect } from 'react'
import "./navbar.css"

const Navbar = () => {




  return (
    <div className="container">
        <div className="navigation">
            <ul>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="school-outline"></ion-icon></span>
                        <span className='title'>School System</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                        <span className='title'>Home</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="book-outline"></ion-icon></span>
                        <span className='title'>Teachers</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="people-outline"></ion-icon></span>
                        <span className='title'>Students</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="mic-outline"></ion-icon></span>
                        <span className='title'>Announcement</span>
                    </a>
                </li>

                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="laptop-outline"></ion-icon></span>
                        <span className='title'>My Course</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="help-circle-outline"></ion-icon></span>
                        <span className='title'>Post Query</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="document-text-outline"></ion-icon></span>
                        <span className='title'>Feedback</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="settings-outline"></ion-icon></span>
                        <span className='title'>Setting</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
                        <span className='title'>Sign-Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar