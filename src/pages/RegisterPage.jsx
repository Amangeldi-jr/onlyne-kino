import React, { useState } from "react";

const RegisterPage = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        contact: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        const firstLetter = formData.firstName.charAt(0).toUpperCase();
        localStorage.setItem("userInitial", firstLetter); // Баш тамганы сактайбыз

        onRegister(formData.firstName);
        alert("Вы успешно зарегистрированы!");

        setFormData({
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
            contact: ""
        });
    };

    return (
        <div>
            <h2>Зарегистрироваться</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="Имя" value={formData.firstName} onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Фамилия" value={formData.lastName} onChange={handleChange} />
                <input type="text" name="username" placeholder="Придумайте логин" value={formData.username} onChange={handleChange} />
                <input type="password" name="password" placeholder="Придумайте пароль" value={formData.password} onChange={handleChange} />
                <input type="password" name="confirmPassword" placeholder="Повторите пароль" value={formData.confirmPassword} onChange={handleChange} />
                <input type="text" name="contact" placeholder="Номер телефона или e-mail" value={formData.contact} onChange={handleChange} />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default RegisterPage;
