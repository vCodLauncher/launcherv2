import { useEffect, useState } from "react";

const Room = () => {
    const [rooms, setRooms] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3002/rooms');
            const data = await response.json();
            setRooms(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section>
            {rooms.length > 0 ? (
                <ul>
                    {rooms.map((room) => (
                        <li key={room.id}>
                            <p>Nom de la salle: {room.name}</p>
                            <p>Nombre de joueurs: {room.maxPlayers}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucune salle disponible.</p>
            )}
        </section>
    )
}

export default Room;
