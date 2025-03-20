import React, { useState } from "react";
import { useGetLatestNewsQuery } from "../../redux/api/kinApi.js";
import Header from "../../layout/header/Header.jsx";
import Footer from "../../layout/footer/Footer.jsx";

const genreMap = {
    28: "Боевик",
    35: "Комедия",
    18: "Драма",
    14: "Фэнтези",
    10749: "Мелодрама",
    878: "Фантастика",
    12: "Приключения"
};

const AfishaPage = () => {
    const { data, error, isLoading } = useGetLatestNewsQuery();
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedDate, setSelectedDate] = useState("2024-03");

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading movies.</p>;

    return (
        <>
            <Header/>
            <div style={{
                width: "1920px",
                backgroundColor: "#1a1d29",
                margin: "0 auto",
                paddingTop: "91px",
                fontFamily: "canvas, sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
            }}>

                <main style={{ padding: "20px" }}>
                    <div style={{display: "flex"}}>
                        <h1 style={{fontWeight: 900, fontSize: "45px"}}>График премьер фильмов</h1>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "530px"}}>
                            <div>
                                <select style={{
                                    width: "100px",
                                    height: "40px",
                                    color: "white",
                                    backgroundColor: "#1a1d29",
                                    border: "1px solid black",
                                    borderRadius: "5px"
                                }} onChange={(e) => setSelectedGenre(e.target.value)}>
                                    <option value="">Все жанры</option>
                                    <option value="28">Боевик</option>
                                    <option value="35">Комедия</option>
                                    <option value="18">Драма</option>
                                </select>
                            </div>
                            <div>
                                <input
                                    type="month"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    style={{
                                        marginLeft: "10px",
                                        width: "100px",
                                        height: "40px",
                                        color: "white",
                                        backgroundColor: "#1a1d29",
                                        border: "1px solid black",
                                        borderRadius: "5px"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <p style={{
                        width: "950px",
                        fontWeight: 500,
                        fontSize: "18px",
                        marginTop: "44px"
                    }}>Также как дальнейшее развитие различных форм деятельности, в своём классическом
                        представлении,<br/> допускает внедрение первоочередных требований. Современные технологии достигли
                        такого уровня, что <br/> внедрение современных методик предполагает независимые способы реализации
                        стандартных подходов. <br/> Сторонники тоталитаризма в науке могут быть объявлены нарушающими
                        общечеловеческие нормы этики и морали.</p>

                    <div style={{display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px", width: "1425px"}}>
                        {data?.results
                            .filter(movie => selectedGenre ? movie.genre_ids.includes(Number(selectedGenre)) : true)
                            .map(movie => (
                                <div key={movie.id} style={{ width: "340px" }}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                        style={{ width: "100%", borderRadius: "8px" }}
                                    />
                                    <h3>{movie.title}</h3>
                                    <p>{new Date(movie.release_date).toLocaleDateString("ru-RU")}</p>
                                    <p style={{color: "yellow"}}>{movie.genre_ids.map(id => genreMap[id]).filter(Boolean).join(", ")}</p>
                                </div>
                            ))}
                    </div>
                </main>
            </div>
            <Footer/>
        </>
    );
};

export default AfishaPage;