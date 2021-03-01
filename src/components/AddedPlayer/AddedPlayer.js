import React from 'react';

const AddedPlayer = (props) => {
    const { image, name, salary } = props.player;

    return (
        <div className="col mb-3">
            <div className="card shadow">
                <img src={image} className="card-img-top p-2" style={{borderRadius: "50%"}} alt="..." />
                <div className="card-body pt-0">
                    <h6 className="card-title mb-0">{name}</h6>
                    <p className="mb-0">Salary: ${salary}</p>
                </div>
            </div>
        </div>
    );
};

export default AddedPlayer;