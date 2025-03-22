import React from "react";
import { useSearchAllQuery } from "../redux/api/kinApi.js";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    const { data, error, isLoading } = useSearchAllQuery(query);

    return (
        <>
            <Header />
            <div style={{ padding: "20px", color: "white", backgroundColor: "#121212", width: "1920px", margin: "0 auto" }}>
                <h1>Результаты поиска</h1>
                <p><strong>Запрос:</strong> {query || "Не указано"}</p>

                {isLoading && <p>Загрузка...</p>}
                {error && <p>Ошибка при загрузке данных.</p>}
                {data && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {data.results.map((item) => (
                            <div key={item.id} style={{ display: "flex", backgroundColor: "#1E1E1E", padding: "15px", borderRadius: "8px" }}>
                                <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title || item.name} style={{ borderRadius: "8px" }} />
                                <div style={{ marginLeft: "15px" }}>
                                    <h2>{item.title || item.name}</h2>
                                    <p>{item.release_date || item.first_air_date}</p>
                                    <p>Рейтинг: {item.vote_average}</p>
                                    <button style={{ backgroundColor: "#0066CC", color: "white", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
                                        Карточка фильма
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default SearchResults;
