import React from 'react'
import student from '../../../assets/student.jpg'
import "../main.css";

const Topbar = () => {
  const handleToggle = () => {
    const navigation = document.querySelector('.navigation');
    const main = document.querySelector('.main');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
  };
  return (
    <div className="topbar">
        <div className="toggle" onClick={handleToggle}>
        <ion-icon name="grid-outline"></ion-icon>

        </div>
        <div className="search">
            <label >
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
            </label>

        </div>
        <div className="user">
            <img src={student} alt="userimg" />

        </div>
    </div>
  )
}

export default Topbar