import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdvancedSearch = ({ onClose }) => {
    const navigate = useNavigate();
    const [searchType, setSearchType] = useState("movies");
    const [query, setQuery] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchParams = new URLSearchParams();
        if (query) searchParams.append("query", query);
        if (year) searchParams.append("year", year);
        if (genre) searchParams.append("genre", genre);
        searchParams.append("type", searchType);

        const queryString = searchParams.toString();
        navigate(`/SearchResults?${queryString}`);
    };



    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "1000",
            }}
            onClick={onClose}
        >
            <div
                style={{
                    width: "80%",
                    maxWidth: "900px",
                    backgroundColor: "#1a1d29",
                    padding: "20px",
                    borderRadius: "8px",
                    color: "white",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "20px",
                        color: "#fff",
                        alignSelf: "flex-end",
                        cursor: "pointer",
                    }}
                >
                    &times;
                </button>
                <h2 style={{ textAlign: "center" }}>Расширенный поиск</h2>

                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    {["movies", "persons", "users"].map((option) => (
                        <button
                            key={option}
                            onClick={() => setSearchType(option)}
                            style={{
                                flex: 1,
                                padding: "10px",
                                backgroundColor: searchType === option ? "#ffeb3b" : "#333",
                                color: searchType === option ? "black" : "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            {option === "movies" ? "Фильмы" : option === "persons" ? "Персоны" : "Пользователи"}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    <label>Введите запрос:</label>
                    <input
                        type="text"
                        placeholder={
                            searchType === "movies"
                                ? "Название фильма..."
                                : searchType === "persons"
                                    ? "Имя актёра или режиссёра..."
                                    : "Имя пользователя..."
                        }
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{width: "100%", padding: "10px", marginTop: "5px"}}
                    />

                    {searchType === "movies" && (
                        <>
                            <label>Год выпуска:</label>
                            <input
                                type="number"
                                placeholder="Например, 2022"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                style={{width: "100%", padding: "10px", marginTop: "5px"}}
                            />

                            <label>Жанр:</label>
                            <select
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                style={{width: "100%", padding: "10px", marginTop: "5px"}}
                            >
                                <option value="">Выберите жанр</option>
                                <option value="action">Боевик</option>
                                <option value="thriller">Триллер</option>
                                <option value="comedy">Комедия</option>
                                <option value="sci-fi">Фантастика</option>
                                <option value="ekshn">Экшн</option>

                            </select>
                        </>
                    )}

                    <button
                        type="submit"
                        style={{
                            marginTop: "15px",
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#ffeb3b",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Искать
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdvancedSearch;
