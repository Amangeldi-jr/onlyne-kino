import React, { useState } from "react";
import { FaVk, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import RegisterModal from "../../pages/RegisterModal.jsx";

const LoginModal = ({ onClose, onRegister }) => {
    const [showRegister, setShowRegister] = useState(false); // RegisterModal ачылышын көзөмөлдөө

    return (
        <>
            {showRegister ? (
                <RegisterModal onClose={() => setShowRegister(false)}
                               onRegister={(name) => {
                                   onRegister(name);
                                   onClose();
                               }}
                />
            ) : (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000
                }}>
                    <div style={{
                        position: "relative",
                        backgroundColor: "#121625",
                        padding: "20px",
                        borderRadius: "8px",
                        width: "400px",
                        textAlign: "center",
                        zIndex: 1001
                    }}>

                        <button onClick={onClose} style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            background: "none",
                            border: "none",
                            fontSize: "20px",
                            color: "white",
                            cursor: "pointer"
                        }}>
                            ✖
                        </button>

                        <h2 style={{ color: "white", marginBottom: "20px" }}>Войти</h2>

                        <input type="text" placeholder="Логин, почта же телефон" style={inputStyle} />
                        <input type="password" placeholder="Сыр сөз" style={inputStyle} />

                        <button style={loginButtonStyle}>Войти</button>

                        {/* "Зарегистрироваться" басканда RegisterModal ачылат */}
                        <button style={registerButtonStyle} onClick={() => setShowRegister(true)}>
                            Зарегистрироваться
                        </button>

                        <p style={{ color: "gray", marginTop: "10px", cursor: "pointer" }}>Восстановить пароль</p>

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

/* Стили */
const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "#1a1d29",
    color: "white",
    fontSize: "16px"
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
    fontSize: "16px"
};

const registerButtonStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px"
};

const iconStyle = {
    fontSize: "24px",
    color: "white",
    cursor: "pointer"
};

export default LoginModal;
