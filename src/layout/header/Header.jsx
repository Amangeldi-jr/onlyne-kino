import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaVk, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Img from "../../assets/img.png";
import Button from "../../components/button/Button.jsx";
import LoginModal from "./LoginModal.jsx";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInitial, setUserInitial] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleRegister = (name) => {
        setUserInitial(name.charAt(0).toUpperCase());
    };

    const handleSearch = () => {
        if (searchQuery) {
            const formattedQuery = searchQuery.toLowerCase();
            let result = [];

            if (formattedQuery.includes("фильм") || formattedQuery.includes("movie")) {
                result.push("Фильмдер");
            }
            if (formattedQuery.includes("актёр") || formattedQuery.includes("actor")) {
                result.push("Адамдар");
            }

            setSearchResults(result);
        }
    };

    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 5%",
                    backgroundColor: "#1a1d29",
                    color: "white",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={Img} alt="Logo" width={100} height={25} />
                    <div style={{ display: "flex", gap: 15, marginTop: 5 }}>
                        {[FaVk, FaInstagram, FaFacebookF, FaTwitter].map((Icon, index) => (
                            <Icon
                                key={index}
                                style={{
                                    color: "#555",
                                    fontSize: "15px",
                                    transition: "color 0.3s ease-in-out",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) => (e.target.style.color = "#fff")}
                                onMouseOut={(e) => (e.target.style.color = "#555")}
                            />
                        ))}
                    </div>
                </div>

                <nav style={{ display: "flex", gap: 30, fontSize: "14px", textAlign: "center" }}>
                    {[
                        { name: "Афиша", path: "/premieres" },
                        { name: "Медиа", path: "/media" },
                        { name: "Фильмы", path: "/movies" },
                        { name: "Актёры", path: "/actors" },
                        { name: "Новости", path: "/news" },
                        { name: "Подборки", path: "/collections" },
                        { name: "Категории", path: "/categories" },
                    ].map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
                        >
                            <h3 style={{ margin: "5px 0" }}>{item.name}</h3>
                        </Link>
                    ))}
                </nav>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <button
                        style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "white",
                            color: "blue",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <IoIosSearch size={18} />
                    </button>

                    {userInitial ? (
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#ffeb3b",
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "18px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {userInitial}
                        </div>
                    ) : (
                        <Button onClick={() => setIsModalOpen(true)}>Войти</Button>
                    )}
                </div>
            </div>

            {isSearchOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "1000",
                    }}
                    onClick={() => setIsSearchOpen(false)}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "8px",
                            width: "400px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            style={{
                                backgroundColor: "transparent",
                                border: "none",
                                fontSize: "20px",
                                color: "#555",
                                alignSelf: "flex-end",
                            }}
                        >
                            &times;
                        </button>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    fontSize: "16px",
                                    borderRadius: "5px",
                                    border: "1px solid #ddd",
                                }}
                            />
                            <IoIosSearch size={18} style={{ color: "#555" }} onClick={handleSearch} />
                        </div>

                        {searchResults.length > 0 && (
                            <div
                                style={{
                                    marginTop: "20px",
                                    padding: "10px",
                                    backgroundColor: "#f0f0f0",
                                    borderRadius: "5px",
                                }}
                            >
                                <h4>Натыйжалар:</h4>
                                {searchResults.map((result, index) => (
                                    <p key={index} style={{ margin: "5px 0" }}>
                                        {result}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} onRegister={handleRegister} />}
        </>
    );
};

export default Header;
