import React, { useState } from "react";
import { useGetLatestNewsQuery } from "../../redux/api/kinApi.js";
import Strelka from "../../assets/strelka.svg";
import EyeIcon from "../../assets/eye.svg"; // 👁 Көрүү иконкасы
import CommentIcon from "../../assets/comment.svg"; // 💬 Комментарий иконкасы

const LatestNews = () => {
    const { data, error, isLoading } = useGetLatestNewsQuery();
    const [mainNews, setMainNews] = useState(null); // Чоң картачка
    const [smallNews, setSmallNews] = useState([]);

    if (isLoading) return <p style={{ color: "white", textAlign: "center" }}>Загрузка...</p>;
    if (error) return <p style={{ color: "red", textAlign: "center" }}>Ошибка загрузки новостей</p>;

    if (!mainNews && data?.results?.length) {
        setMainNews(data.results[0]);
        setSmallNews(data.results.slice(1, 5));
    }

    const handleSwapNews = (clickedNews) => {
        setSmallNews((prevSmallNews) => [mainNews, ...prevSmallNews.filter((news) => news.id !== clickedNews.id)]);
        setMainNews(clickedNews);
    };

    return (
        <div style={{ width: "1920px", backgroundColor: "#1a1d29", color: "white", margin: "auto", padding: "50px 0" }}>
            {/* Заголовок */}
            <div style={{ display: "flex", alignItems: "center", marginLeft: "245px" }}>
                <h2 style={{ fontWeight: 900, fontSize: "45px" }}>Последние новости</h2>
                <div style={{ marginLeft: "800px", display: "flex", alignItems: "center" }}>
                    <button style={{ fontWeight: 700, fontSize: "22px", color: "white", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
                        Все новости
                    </button>
                    <img style={{ marginLeft: "10px" }} src={Strelka} alt="Strelka" />
                </div>
            </div>

            {/* Жаңылыктар */}
            <div style={{ display: "flex", marginLeft: "245px", marginTop: "20px", gap: "20px" }}>
                {/* Чоң картачка */}
                {mainNews && (
                    <div style={{
                        width: "1159px",
                        height: "772px",
                        backgroundColor: "#2b2f3a",
                        borderRadius: "10px",
                        overflow: "hidden",
                        position: "relative",
                        cursor: "pointer"
                    }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w1280${mainNews.backdrop_path}`}
                            alt={mainNews.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div style={{
                            position: "absolute",
                            bottom: "20px",
                            left: "20px",
                            right: "20px",
                            color: "white",
                            background: "rgba(0, 0, 0, 0.7)",
                            padding: "20px",
                            borderRadius: "5px"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "15px", fontSize: "16px", color: "#aaa" }}>
                                <p>📅 {mainNews.release_date}</p>
                                <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <img src={EyeIcon} alt="views" width="16" height="16" /> {Math.floor(Math.random() * 10000)}
                                </p>
                                <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <img src={CommentIcon} alt="comments" width="16" height="16" /> {Math.floor(Math.random() * 500)}
                                </p>
                            </div>
                            <h1 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "10px" }}>{mainNews.title}</h1>
                            <p style={{ fontSize: "16px", marginTop: "10px", lineHeight: "1.4" }}>
                                {mainNews.overview.length > 200
                                    ? mainNews.overview.substring(0, 200) + "..."
                                    : mainNews.overview}
                            </p>
                        </div>
                    </div>
                )}

                {/* Кичинекей картачкалар */}
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    {smallNews.map((news) => (
                        <div key={news.id}
                             onClick={() => handleSwapNews(news)}
                             style={{
                                 width: "254px",
                                 height: "182px",
                                 backgroundColor: "#2b2f3a",
                                 borderRadius: "10px",
                                 overflow: "hidden",
                                 position: "relative",
                                 cursor: "pointer"
                             }}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${news.poster_path}`}
                                alt={news.title}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <div style={{
                                position: "absolute",
                                bottom: "10px",
                                left: "10px",
                                right: "10px",
                                color: "white",
                                background: "rgba(0, 0, 0, 0.7)",
                                padding: "8px",
                                borderRadius: "5px"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: "#aaa" }}>
                                    <p>📅 {news.release_date}</p>
                                    <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        <img src={EyeIcon} alt="views" width="12" height="12" /> {Math.floor(Math.random() * 10000)}
                                    </p>
                                    <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        <img src={CommentIcon} alt="comments" width="12" height="12" /> {Math.floor(Math.random() * 500)}
                                    </p>
                                </div>
                                <h3 style={{ fontSize: "14px", fontWeight: "bold", marginTop: "5px" }}>{news.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
