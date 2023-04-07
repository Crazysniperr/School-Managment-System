import React from 'react'
import "../bottom.css"
import teach1 from '../../../assets/userimg.jpg';
import teach2 from '../../../assets/teach2.jpg';
import teach3 from '../../../assets/teach3.jpg';
import teach4 from '../../../assets/teach4.jpg';
import teach5 from '../../../assets/teach5.jpg';
import teach6 from '../../../assets/teach6.jpg';
import teach7 from '../../../assets/teach7.jpg';
import teach8 from '../../../assets/teach8.jpg';




const Teachers = () => {
  return (
    <div class="recentCustomers">
                    <h2>My Teachers</h2>
                    <div class="cardHeader">
                        
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={teach1} alt=""/></div>
                            </td>
                            <td>
                                <h4>Mr. David <br/> <span>Computer Science</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={teach2} alt=""/></div>
                            </td>
                            <td>
                                <h4>Mr. Amit <br/> <span>Information Technology</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={teach6} alt=""/></div>
                            </td>
                            <td>
                                <h4>Miss Swati <br/> <span>History</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={teach4} alt=""/></div>
                            </td>
                            <td>
                                <h4>Mrs. Rose <br/> <span>French</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={teach3} alt=""/></div>
                            </td>
                            <td>
                                <h4>Mr. Smith <br/> <span>Physical Training</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={teach5} alt=""/></div>
                            </td>
                            <td>
                                <h4>Miss Rashmee <br/> <span>Buisness & Finance</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={teach7} alt=""/></div>
                            </td>
                            <td>
                                <h4>Mr. Walker<br/> <span>Chemistry</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src={teach8} alt=""/></div>
                            </td>
                            <td>
                                <h4>Mr. Newton <br/> <span>Physics</span></h4>
                            </td>
                        </tr>
                    </table>
                </div>
  )
}

export default Teachers