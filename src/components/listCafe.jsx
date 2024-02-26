import { useState, useEffect } from 'react';
import Coffe from "./coffe"
import styles from "../style/listCafe.module.css"


export default function ListCafe() {
    const [coffeeData, setCoffeeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
                const data = await response.json();
                setCoffeeData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.grid}>
            {coffeeData.map(coffee => (
                <Coffe key={coffee.id} cafe={coffee}/>
            ))}
        </div>
    )
}
