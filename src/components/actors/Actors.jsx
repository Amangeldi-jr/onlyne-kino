import React, { useEffect, useState } from 'react';
import Header from "../../layout/header/Header.jsx";
import Footer from "../../layout/footer/Footer.jsx";
import { useGetPopularPersonsQuery } from "../../redux/api/kinApi.js";

const Actors = () => {
    const [allActors, setAllActors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading } = useGetPopularPersonsQuery({ timeframe: "week", page: currentPage });

    useEffect(() => {
        if (data?.results) {
            setAllActors((prevActors) => [...prevActors, ...data.results]);
            if (allActors.length < 100 && currentPage < 5) {
                setCurrentPage((prevPage) => prevPage + 1);
            }
        }
    }, [data]);

    if (isLoading && allActors.length === 0) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <Header />
            <div style={{
                width: "1920px",
                backgroundColor: "#1a1d29",
                margin: "0 auto",
                color: "white",
                padding: "20px"
            }}>
                <h1 style={{ textAlign: "center" }}>Актёры</h1>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                    {allActors.slice(0, 100).map((actor) => (
                        <div key={actor.id} style={{ textAlign: "center" }}>
                            <img
                                src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : 'https://via.placeholder.com/200x300?text=No+Image'}
                                alt={actor.name}
                                style={{ width: "350px", height: "450px", borderRadius: "10px" }}
                            />
                            <p><strong>{actor.name}</strong></p>
                            <p>{actor.known_for_department}</p>
                            <p>Born: {actor.birthday || 'N/A'}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Actors;
