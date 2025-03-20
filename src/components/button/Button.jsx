import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button
            style={{
                backgroundColor: "#2b5cff",
                color: "white",
                width: "120px",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0px 0px 15px rgba(43, 92, 255, 0.8)",
                transition: "0.3s ease-in-out"
            }}
            onMouseOver={(e) => e.target.style.boxShadow = "0px 0px 25px rgba(43, 92, 255, 1)"}
            onMouseOut={(e) => e.target.style.boxShadow = "0px 0px 15px rgba(43, 92, 255, 0.8)"}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
