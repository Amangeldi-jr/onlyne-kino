import React, { useState } from "react";

const RegisterModal = ({ onClose, onRegister }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        contact: ""
    });

    // Маалыматтарды алуу
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Форманы жөнөтүү
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        // Регистрация успешна, обновляем состояние и закрываем модал
        console.log("📥 Тазаланган маалымат:", formData);

        // Передаем первую букву имени в Header
        onRegister(formData.firstName);

        // Маалыматтарды тазалоо
        setFormData({
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
            contact: ""
        });

        onClose(); // Модалды жабуу
    };

    return (
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <button onClick={onClose} style={closeButtonStyle}>✖</button>

                <h2 style={{ color: "white", marginBottom: "20px" }}>Зарегистрироваться</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder="Имя" value={formData.firstName} onChange={handleChange} style={inputStyle} />
                    <input type="text" name="lastName" placeholder="Фамилия" value={formData.lastName} onChange={handleChange} style={inputStyle} />
                    <input type="text" name="username" placeholder="Придумайте логин" value={formData.username} onChange={handleChange} style={inputStyle} />
                    <input type="password" name="password" placeholder="Придумайте пароль" value={formData.password} onChange={handleChange} style={inputStyle} />
                    <input type="password" name="confirmPassword" placeholder="Повторите пароль" value={formData.confirmPassword} onChange={handleChange} style={inputStyle} />
                    <input type="text" name="contact" placeholder="Номер телефона или e-mail" value={formData.contact} onChange={handleChange} style={inputStyle} />

                    <button type="submit" style={registerButtonStyle}>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

/* ✅ Стили */
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
    zIndex: 1000
};

const modalStyle = {
    position: "relative",
    backgroundColor: "#121625",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    textAlign: "center",
    zIndex: 1001
};

const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "20px",
    color: "white",
    cursor: "pointer"
};

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

const registerButtonStyle = {
    backgroundColor: "#ffeb3b",
    color: "black",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "16px"
};

export default RegisterModal;
