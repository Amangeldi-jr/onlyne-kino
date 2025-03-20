import React, { useState, useEffect } from "react";
import { useGetAllMoviesQuery, useGetMovieTrailerQuery } from "../../redux/api/kinApi.js";
import Strelka from "../../assets/strelka.svg";
import { AiOutlineEllipsis, AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaVk, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const TrailersSection = () => {
    const { data, isLoading, error } = useGetAllMoviesQuery({ category: null, language: "ru" });

    const [mainMovie, setMainMovie] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { data: trailerData } = useGetMovieTrailerQuery(mainMovie?.id, { skip: !mainMovie });

    const [likes, setLikes] = useState(3245);
    const [dislikes, setDislikes] = useState(420);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    useEffect(() => {
        if (data?.results?.length > 0) {
            setMainMovie(data.results[0]); // Баштапкы чоң карточка
        }
    }, [data]);

    const trailers = trailerData?.results?.filter((video) => video.type === "Trailer") || [];
    const trailerKey = trailers.length > 0 ? trailers[0].key : null;

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
        } else {
            setLikes(likes + 1);
            setLiked(true);
            if (disliked) {
                setDislikes(dislikes - 1);
                setDisliked(false);
            }
        }
    };

    const handleDislike = () => {
        if (disliked) {
            setDislikes(dislikes - 1);
            setDisliked(false);
        } else {
            setDislikes(dislikes + 1);
            setDisliked(true);
            if (liked) {
                setLikes(likes - 1);
                setLiked(false);
            }
        }
    };

    if (isLoading) {
        return <h2 className="text-center text-white text-2xl">Loading...</h2>;
    }
    if (error) return <p className="text-center text-red-500">Ошибка: {error.message}</p>;

    return (
        <div style={{ width: "100%", maxWidth: "1920px", margin: "0 auto", backgroundColor: "#1a1d29", color: "white", padding: "20px 245px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ fontWeight: 900, fontSize: "45px" }}>Новые трейлеры</h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h3 style={{ fontWeight: 700, fontSize: "20px" }}>Все трейлеры</h3>
                    <img src={Strelka} alt="Стрелка" style={{ marginLeft: "10px" }} />
                </div>
            </div>

            {/* Чоң карточка (Трейлер ойнотулган же сүрөт) */}
            {mainMovie && (
                <div style={{ marginTop: "20px", position: "relative", textAlign: "center" }}>
                    {isPlaying && trailerKey ? (
                        <iframe
                            width="100%"
                            height="500px"
                            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <>
                            <img
                                src={`https://image.tmdb.org/t/p/original${mainMovie.backdrop_path}`}
                                alt={mainMovie.title}
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                            {trailerKey && (
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                                        border: "none",
                                        borderRadius: "50%",
                                        width: "80px",
                                        height: "80px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        cursor: "pointer",
                                    }}>
                                    <span style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}>▶</span>
                                </button>
                            )}
                        </>
                    )}
                    {/* Фильмдин аты жана иконкалар */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", padding: "0 10px" }}>
                        <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
                            {mainMovie.title}
                        </h3>
                        {/* Соц. тармак иконкалары */}
                        <div style={{ display: "flex", gap: "10px" }}>
                            <FaVk size={22} color="#fff" />
                            <FaInstagram size={22} color="#fff" />
                            <FaFacebookF size={22} color="#fff" />
                            <FaTwitter size={22} color="#fff" />
                            <AiOutlineEllipsis size={22} color="#fff" />
                        </div>
                    </div>

                    {/* Лайк жана Дизлайк */}
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "10px", justifyContent: "center" }}>
                        <AiFillLike
                            size={26}
                            color={liked ? "#4CAF50" : "#ffffff"}
                            style={{ cursor: "pointer" }}
                            onClick={handleLike}
                        />
                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>{likes}</span>
                        <AiFillDislike
                            size={26}
                            color={disliked ? "#f44336" : "#ffffff"}
                            style={{ cursor: "pointer" }}
                            onClick={handleDislike}
                        />
                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>{dislikes}</span>
                    </div>
                </div>
            )}

            {/* Кичинекей карточкалар */}
            <div style={{ display: "flex", gap: "20px", overflowX: "auto", marginTop: "20px" }}>
                {data?.results?.map((movie) => (
                    <div key={movie.id} style={{ minWidth: "250px", textAlign: "center", position: "relative", cursor: "pointer" }}
                         onClick={() => { setMainMovie(movie); setIsPlaying(false); }}>  {/* Чоң карточканы өзгөртүү */}
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                        <p style={{ marginTop: "5px", fontWeight: "bold" }}>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrailersSection;
