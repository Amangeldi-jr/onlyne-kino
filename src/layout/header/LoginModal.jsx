import React, { useState } from "react";
import { FaVk, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import RegisterModal from "../../pages/RegisterModal.jsx";

const LoginModal = ({ onClose, onRegister, onLogin }) => {
    const [showRegister, setShowRegister] = useState(false);
    const [loginData, setLoginData] = useState({ username: "", password: "" });

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        // You can replace this with actual authentication logic
        if (loginData.username && loginData.password) {
            // Assuming successful login, you can store data in localStorage
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userInitial", loginData.username.charAt(0).toUpperCase());

            onLogin(loginData.username.charAt(0).toUpperCase()); // Pass the initial to parent component
            onClose(); // Close the login modal
        } else {
            alert("Пожалуйста, заполните все поля!");
        }
    };

    return (
        <>
            {showRegister ? (
                <RegisterModal
                    onClose={() => setShowRegister(false)}
                    onRegister={(name) => {
                        onRegister(name);
                        onClose();
                    }}
                />
            ) : (
                <div style={overlayStyle}>
                    <div style={modalStyle}>
                        <button onClick={onClose} style={closeButtonStyle}>
                            ✖
                        </button>

                        <h2 style={{ color: "white", marginBottom: "20px" }}>Войти</h2>

                        <form onSubmit={handleLoginSubmit}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Логин, почта или телефон"
                                style={inputStyle}
                                value={loginData.username}
                                onChange={handleLoginChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Сыр слово"
                                style={inputStyle}
                                value={loginData.password}
                                onChange={handleLoginChange}
                            />

                            <button type="submit" style={loginButtonStyle}>
                                Войти
                            </button>
                        </form>

                        <button
                            style={registerButtonStyle}
                            onClick={() => setShowRegister(true)}
                        >
                            Зарегистрироваться
                        </button>

                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
                            {[FaVk, FaFacebookF, FaGoogle, FaTwitter].map((Icon, index) => (
                                <Icon key={index} style={iconStyle} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

const modalStyle = {
    position: "relative",
    backgroundColor: "#121625",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    textAlign: "center",
    zIndex: 1001,
};

const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "20px",
    color: "white",
    cursor: "pointer",
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "#1a1d29",
    color: "white",
    fontSize: "16px",
};

const loginButtonStyle = {
    backgroundColor: "#ffeb3b",
    color: "black",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "16px",
};

const registerButtonStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
};

const iconStyle = {
    fontSize: "24px",
    color: "white",
    cursor: "pointer",
};

export default LoginModal;
