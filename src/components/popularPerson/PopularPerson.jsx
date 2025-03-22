import React, { useState, useEffect } from "react";
import { useGetPopularPersonsQuery } from "../../redux/api/kinApi.js";

const PopularPersons = () => {
    const [timeframe, setTimeframe] = useState("week");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { data, error, isLoading } = useGetPopularPersonsQuery({ timeframe });

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1280;

    return (
        <div style={{ width: "1920px", margin: "auto", backgroundColor: "#1a1d29", color: "white", padding: "20px" }}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", marginLeft: isMobile ? "20px" : "245px" }}>
                <h2 style={{ fontWeight: 900, fontSize: isMobile ? "30px" : "45px" }}>Популярные персоны</h2>
                <div style={{ display: "flex", marginTop: "10px", gap: "30px", fontWeight: 700, fontSize: "18px", marginLeft: isMobile ? "0px" : "630px" }}>
                    {["year", "month", "week"].map((time) => (
                        <p
                            key={time}
                            style={{ cursor: "pointer", textDecoration: timeframe === time ? "underline" : "none" }}
                            onClick={() => setTimeframe(time)}
                        >
                            {time === "year" ? "За год" : time === "month" ? "За месяц" : "За неделю"}
                        </p>
                    ))}
                </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? "10px" : "90px", marginLeft: isMobile ? "20px" : "245px", marginTop: "20px", justifyContent: isMobile ? "center" : "flex-start" }}>
                {data?.results?.slice(0, 2).map((person, index) => (
                    <div key={person.id} style={{ position: "relative", backgroundColor: "#2a2d3a", borderRadius: "10px", width: isMobile ? "300px" : "400px", height: isMobile ? "450px" : "600px" }}>
                        <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} style={{ width: "450px", height: "600px", borderRadius: "10px" }} />
                        <div style={{ position: "absolute", bottom: "10px", left: "10px", backgroundColor: "rgba(0, 0, 0, 0.6)", padding: "10px", borderRadius: "5px" }}>
                            <p style={{ fontSize: "18px", fontWeight: "bold", color: "white" }}>{person.name} ({person.original_name})</p>
                            <p style={{ color: "#FFD700" }}>{index + 1}-е место</p>
                            <p style={{ fontSize: "14px", color: "#ccc" }}>
                                {person.birthday ? `Год рождения: ${person.birthday.split("-")[0]}` : "Год рождения: Неизвестно"}
                            </p>
                        </div>
                    </div>
                ))}
                <div style={{ backgroundColor: "#2a2d3a", padding: "20px", borderRadius: "10px", width: isMobile ? "300px" : "450px", height: isMobile ? "450px" : "600px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
                    {data?.results?.slice(2, 6).map((person, index) => (
                        <div key={person.id} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <p style={{ fontSize: "18px", fontWeight: "bold" }}>{person.name} ({person.original_name})</p>
                                <p style={{ fontSize: "14px", color: "#ccc" }}>
                                    {person.birthday ? `Год рождения: ${person.birthday.split("-")[0]}` : "Год рождения: Неизвестно"}
                                </p>
                            </div>
                            <p style={{ color: "#FFD700", alignSelf: "center" }}>{index + 3}-е место</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularPersons;
