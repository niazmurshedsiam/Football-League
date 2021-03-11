import React from 'react';
import { useState, useEffect } from 'react';
import Leagues from '../Leagues/Leagues';



const Home = () => {
    const [sports, setSports] = useState([])
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
        fetch(url)
            .then(res => res.json())
            .then(data => setSports(data.leagues))
    }, [])
    // console.log(sports.slice(0, 15))
    const sport = sports.slice(0, 15)
    return (
        <div>
            {
                sport.map(sp => <Leagues league={sp}></Leagues>)
            }
        </div>
    );
};
export default Home;