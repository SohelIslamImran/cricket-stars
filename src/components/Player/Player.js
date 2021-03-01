import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBirthdayCake, faMapMarkedAlt, faRunning, faWineBottle, faBaseballBall, faMoneyCheckAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Player = (props) => {
    const { image, name, birth, birthPlace, role, battingStyle, bowlingStyle, salary } = props.player;
    const [btnDisable, setBtnDisable] = useState(false);

    return (
        <div className="col mb-4">
            <div className="card shadow">
                <img src={image} className="card-img-top p-3" alt="..." />
                <div className="card-body pt-1">
                    <p><FontAwesomeIcon className="icon" icon={faUser} /> Name: <span className="name">{name}</span></p>
                    <p><FontAwesomeIcon className="icon" icon={faBirthdayCake} /> Born: {birth}</p>
                    <p><FontAwesomeIcon className="icon" icon={faMapMarkedAlt} /> Birth Place: {birthPlace}</p>
                    <p><FontAwesomeIcon className="icon" icon={faRunning} /> Role: {role}</p>
                    <p><FontAwesomeIcon className="icon" icon={faWineBottle} /> Batting Style: {battingStyle}</p>
                    <p><FontAwesomeIcon className="icon" icon={faBaseballBall} /> Bowling Style: {bowlingStyle}</p>
                    <p><FontAwesomeIcon className="icon" icon={faMoneyCheckAlt} /> Salary: ${salary}</p>
                    <button onClick={() => {
                        props.handleAddPlayer(props.player);
                        setBtnDisable(true);
                    }} className={btnDisable ? "add-btn disabled" : "add-btn"}><FontAwesomeIcon className="icon" icon={faPlusSquare} /> {btnDisable ? "Added" : "Add to Team"}</button>
                </div>
            </div>
        </div>

    );
};

export default Player;