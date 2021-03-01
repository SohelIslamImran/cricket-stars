import React from 'react';
import AddedPlayer from '../AddedPlayer/AddedPlayer';

const Team = (props) => {
    let salary = 0;
    props.addedPlayer.forEach(player => salary += player.salary);
    
    return (
        <div className="card border-light mb-3" style={{ maxWidth: "35rem"}}>
            <h2 className="card-header text-center">Team Players</h2>
            <div className="card-body text-center">
                <h3 className="card-title">Total Players: {props.addedPlayer.length}</h3>
                <h4 className="card-text">Total Budget: ${salary}</h4>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4 mt-4">
                    {
                        props.addedPlayer.map(player => <AddedPlayer player={player}></AddedPlayer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;