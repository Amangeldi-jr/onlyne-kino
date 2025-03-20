import React from "react";

const RegisterPage = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#121625" }}>
            <div style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                width: "400px",
                textAlign: "center"
            }}>
                <h2 style={{ color: "#121625", marginBottom: "20px" }}>Зарегистрироваться</h2>

                <input type="text" placeholder="Имя" style={inputStyle} />
                <input type="text" placeholder="Фамилия" style={inputStyle} />
                <input type="text" placeholder="Придумайте логин" style={inputStyle} />
                <input type="password" placeholder="Придумайте пароль" style={inputStyle} />
                <input type="password" placeholder="Повторите пароль" style={inputStyle} />
                <input type="text" placeholder="Номер телефона же e-mail" style={inputStyle} />

                <button style={registerButtonStyle}>Зарегистрироваться</button>
            </div>
        </div>
    );
};

const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #555",
    backgroundColor: "#f1f1f1",
    color: "black",
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
    fontSize: "16px"
};

export default RegisterPage;
