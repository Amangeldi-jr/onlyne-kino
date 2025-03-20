import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useGetAllMoviesQuery } from "../../redux/api/kinApi.js";
import B from "/src/assets/b.svg";

const PopularFilms = () => {
    const [selectedYear, setSelectedYear] = useState(2019);
    const { data, error, isLoading } = useGetAllMoviesQuery({ year: selectedYear });

    if (isLoading) return <p style={{ color: "white", textAlign: "center" }}>Загрузка...</p>;
    if (error) return <p style={{ color: "red", textAlign: "center" }}>Ошибка загрузки данных</p>;

    return (
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#1a1d29", width: "1920px", padding: "50px 0", margin: "0 auto" }}>
            <div style={{ width: "1920px" }}>
                <div style={{ display: "flex" }}>
                    <h2 style={{ color: "white", fontSize: "45px", marginLeft: "245px", fontWeight: 900 }}>Популярные фильмы</h2>
                    <img style={{ marginLeft: "200px" }} src={B} alt={"B"} />

                    <div style={{ display: "flex", marginLeft: "245px", gap: "15px", marginTop: "20px", fontWeight: 700, fontSize: "18px" }}>
                        {["Всё время", 2020, 2019, 2018, 2017, 2016, 2015].map((year) => (
                            <p
                                key={year}
                                onClick={() => setSelectedYear(year === "Всё время" ? null : year)}
                                style={{
                                    cursor: "pointer",
                                    color: selectedYear === year ? "white" : "#535457",
                                    fontWeight: selectedYear === year ? "bold" : "normal",
                                    transition: "color 0.3s",
                                }}
                            >
                                {year}
                            </p>
                        ))}
                    </div>
                </div>


                <Swiper
                    pagination={{
                        clickable: true,
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    style={{ paddingLeft: "245px", paddingBottom: "50px", marginTop: "50px" }}
                >
                    {data.results.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div
                                style={{
                                    position: "relative",
                                    textAlign: "center",
                                    width: "340px",
                                    height: "520px",
                                    borderRadius: "10px",
                                    overflow: "hidden",
                                    backgroundColor: "#222",
                                }}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    style={{ width: "100%", height: "85%", objectFit: "cover" }}
                                />

                                        <div
                                        style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        background: "green",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {movie.vote_average.toFixed(1)}
                            </div>

                            <div style={{ padding: "10px", background: "#1a1d29", height: "15%" }}>
                                <h3 style={{ color: "white", fontSize: "18px", marginBottom: "5px" }}>{movie.title}</h3>
                                <p style={{ color: "yellow", fontSize: "14px" }}>
                                    {movie.genre_ids.map((id) => genreMap[id]).join(", ")}
                                </p>
                            </div>
                        </div>
                        </SwiperSlide>
                        ))}
                        </Swiper>
                        </div>
                        </div>
                        );
                    };

                    const genreMap = {
                    28: "Боевик",
                    12: "Приключения",
                    16: "Мультфильм",
                    35: "Комедия",
                    80: "Криминал",
                    99: "Документальный",
                    18: "Драма",
                    10751: "Семейный",
                    14: "Фэнтези",
                    36: "Исторический",
                    27: "Ужасы",
                    10402: "Музыка",
                    9648: "Детектив",
                    10749: "Мелодрама",
                    878: "Фантастика",
                    10770: "Телевизионный фильм",
                    53: "Триллер",
                    10752: "Военный",
                    37: "Вестерн",
                };

                    export default PopularFilms;