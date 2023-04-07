import React from 'react'
import "../Main/main.css"

const Cards = () => {
  return (
    <div className="cardBox">
        <div className="card">
            <div>
                <div className="number">10</div>
                <div className="cardName">Upcoming Exams</div>
            </div>
            <div className="iconBx">
            <ion-icon name="pencil-outline"></ion-icon>
            </div>
        </div>
        <div className="card">
            <div>
                <div className="number">5</div>
                <div className="cardName">Events</div>
            </div>
            <div className="iconBx">
            <ion-icon name="flag-outline"></ion-icon>
            </div>
        </div>
        <div className="card">
            <div>
                <div className="number">Rs. 5000</div>
                <div className="cardName">Course Fees</div>
            </div>
            <div className="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
            </div>
        </div>
        <div className="card">
            <div>
                <div className="number">5</div>
                <div className="cardName">Documents</div>
            </div>
            <div className="iconBx">
            <ion-icon name="document-text-outline"></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default Cards