import React from 'react'
import "../bottom.css"
import student from "../../../assets/student.jpg"

const Student = () => {
  return (
    <div className="recentOrders">
                    <h2>My Information</h2>
                    <div className="cardHeader">
                          <div className="image">
                            <div className="imgBx">
                            <img src={student} alt="Student 1"/></div>
                            <button className="change-img-btn">Edit Profile</button>
                          </div>
                          <div className="st-details">
                            <p>
                              <label >Name:</label>
                              <span>Rity Awa</span>
                            </p>
                            <p>
                              <label >Gender:</label>
                              <span>Female</span>
                            </p>
                            <p>
                              <label >Father Name:</label>
                              <span>San Awa</span>
                            </p>
                            <p>
                              <label >Mother Name:</label>
                              <span>Anu Awa</span>
                            </p>
                            <p>
                              <label >Date Of Birth:</label>
                              <span>18/07/2008</span>
                            </p>
                            <p>
                              <label >Email:</label>
                              <span>RityAwa@gmail.com</span>
                            </p>
                            <p>
                              <label >Admission Date:</label>
                              <span>05/03/20123</span>
                            </p>
                            <p>
                              <label >Class:</label>
                              <span>9</span>
                            </p>
                            <p>
                              <label >Section:</label>
                              <span>A</span>
                            </p>
                            
                          </div>
                        </div>
                                              
                    </div>            
  )
}

export default Student