import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaVk, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Ok from "../../assets/ok.png";
import Button from "../../components/button/Button.jsx";
import LoginModal from "./LoginModal.jsx";
import AdvancedSearch from "./AdvancedSearch.jsx";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInitial, setUserInitial] = useState(null);
    const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserInitial = localStorage.getItem("userInitial");
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

        if (storedIsLoggedIn === "true" && storedUserInitial) {
            setUserInitial(storedUserInitial);
            setIsLoggedIn(true);
        }
    }, []);

    const handleRegister = (name) => {
        const initial = name.charAt(0).toUpperCase();
        setUserInitial(initial);
        setIsLoggedIn(true);
        localStorage.setItem("userInitial", initial);
        localStorage.setItem("isLoggedIn", "true");
        setIsModalOpen(false);
    };

    const handleLogout = () => {
        setUserInitial(null);
        setIsLoggedIn(false);
        localStorage.removeItem("userInitial");
        localStorage.setItem("isLoggedIn", "false");
    };

    const handleVkClick = () => {
        window.open("https://vk.com/id1037041579", "_blank");
    };

    const handleFacebookClick = () => {
        window.open("https://www.facebook.com/share/155x3Ssp5v/", "_blank");
    };

    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/__kara07__?igsh=cGM1czhkejF0ZnZm", "_blank");
    };

    return (
        <>
            <header style={styles.header}>
                <div style={styles.logoSection}>
                    <img src={Ok} alt="Logo" width={100} height={100} />
                    <div style={styles.socialIcons}>
                        <FaVk onClick={handleVkClick} style={styles.icon} />
                        <FaFacebookF onClick={handleFacebookClick} style={styles.icon} />
                        <FaInstagram onClick={handleInstagramClick} style={styles.icon} />
                        {[FaTwitter].map((Icon, index) => (
                            <Icon key={index} style={styles.icon} />
                        ))}
                    </div>
                </div>

                <nav style={styles.nav}>
                    {[{ name: "Афиша", path: "/premieres" }, { name: "Фильмы", path: "/movies" }, { name: "Актёры", path: "/actors" }, { name: "Подборки", path: "/collections" }].map((item, index) => (
                        <Link key={index} to={item.path} style={styles.link}>
                            <h3>{item.name}</h3>
                        </Link>
                    ))}
                </nav>

                <div style={styles.rightSection}>
                    <button style={styles.searchButton} onClick={() => setIsAdvancedSearchOpen(true)}>
                        <IoIosSearch size={18} />
                    </button>

                    {isLoggedIn ? (
                        <Link to="/profile" style={styles.profileLink}>
                            <div style={styles.profileIcon}>{userInitial}</div>
                        </Link>
                    ) : (
                        <Button onClick={() => setIsModalOpen(true)}>Войти</Button>
                    )}

                    {isLoggedIn && <Button onClick={handleLogout}>Выход</Button>}
                </div>
            </header>

            {isAdvancedSearchOpen && <AdvancedSearch onClose={() => setIsAdvancedSearchOpen(false)} />}
            {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} onRegister={handleRegister} />}
        </>
    );
};

const styles = {
    header: {
        width: "100%",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 5%",
        backgroundColor: "#1a1d29",
        color: "white",
    },
    logoSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    socialIcons: {
        display: "flex",
        gap: 15,
        marginTop: 5,
    },
    icon: {
        color: "#555",
        fontSize: "15px",
        cursor: "pointer",
    },
    nav: {
        display: "flex",
        gap: 30,
    },
    link: {
        textDecoration: "none",
        color: "white",
    },
    rightSection: {
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
    searchButton: {
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        color: "blue",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
    },
    profileLink: {
        textDecoration: "none",
    },
    profileIcon: {
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
        cursor: "pointer",
    },
};

export default Header;
