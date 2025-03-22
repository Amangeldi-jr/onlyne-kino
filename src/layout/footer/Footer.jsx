import React from 'react';
import Img2 from "../../assets/img_1.png";
import { FaVk, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
    return (

        <div style={{
            width: "1920px",
            backgroundColor: "#1a1d29",
            margin: "0 auto",
            paddingTop: "91px",
            fontFamily: "canvas, sans-serif",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>

            <div style={{
                width: "90%",
                maxWidth: "1428px",
                minHeight: "548px",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                paddingTop: "76px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <img src={Img2} alt="Logo" width={300} height={40} style={{ maxWidth: "80%" }} />
                <h1 style={{ fontWeight: 900, fontSize: "50px", color: "white", marginTop: "53px" }}>
                    Подпишитесь на E-mail рассылку
                </h1>
                <p style={{ fontWeight: 500, fontSize: "22px", color: "white", maxWidth: "90%" }}>
                    Если хотите быть в курсе последних новостей и новинок кино -<br /> заполните форму ниже и
                    оформите бесплатную E-mail рассылку!
                </p>
                <div style={{ marginTop: "20px", display: "flex", flexWrap: "nowrap", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                    <input
                        style={{
                            width: "200%",
                            maxWidth: "425px",
                            height: "71px",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            paddingLeft: "27px",
                            fontSize: "18px",
                            border: "none",
                        }}
                        type="email"
                        placeholder="Введите свой E-mail адрес"
                    />
                    <button
                        style={{
                            width: "300px",
                            height: "71px",
                            borderRadius: "10px",
                            backgroundColor: "yellow",
                            fontSize: "18px",
                            fontWeight: 400,
                            border: "none",
                        }}
                    >
                        Подписаться
                    </button>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <input type="checkbox" id="consent" />
                    <label htmlFor="consent" style={{color: "white", fontSize: "16px", marginLeft: "5px"}}>
                        Соглашаюсь на условия
                        <button type="button" className="btn btn-link" style={{fontSize: "18px", textAlign: "center", color: "yellow"}}>политики конфиденциальности</button>
                    </label>
                </div>
            </div>
            <div style={{width: "100%", maxWidth: "1428px", textAlign: "center", marginTop: "40px"}}>
                <div style={{display: "flex", gap: 30, justifyContent: "center", flexWrap: "wrap"}}>
                    {[FaVk, FaInstagram, FaFacebookF, FaTwitter, FaYoutube].map((Icon, index) => (
                        <Icon key={index} style={{
                            color: "#555",
                            fontSize: "20px",
                            transition: "color 0.3s ease-in-out"
                        }}
                              onMouseOver={(e) => e.target.style.color = "#fff"}
                              onMouseOut={(e) => e.target.style.color = "#555"}/>
                    ))}
                </div>


                <div style={{color: "#8f8f8d", fontWeight: 400, fontSize: "15px", marginTop: "41px"}}>
                    <p>2020 © Kinoarea. Все права защищены</p>
                    <button type="button" className="btn btn-link"
                            style={{fontSize: "18px", textAlign: "center", color: "#8f8f8d"}}>политики
                        конфиденциальности
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
