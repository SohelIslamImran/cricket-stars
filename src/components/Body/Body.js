import { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Player from '../Player/Player';
import Team from '../Team/Team';

const Body = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => setPlayers(fakeData), []);
    
    const [addedPlayer, setAddedPlayer] = useState([]);
    const handleAddPlayer = (player) => {
        const newAddedPlayer = [...addedPlayer, player]
        setAddedPlayer(newAddedPlayer);
    };

    return (
        <div className="row my-4">
            <div className="col-sm-8">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {
                        players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Player>)
                    }
                </div>
            </div>
            <div className="col-sm-4">
                <Team addedPlayer={addedPlayer}></Team>
            </div>
        </div>
    );
};

export default Body;