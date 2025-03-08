import React from 'react';
import Button from "../../components/button/Button.jsx";

const HomePage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button>login</Button>
        </div>
    );
};

export default HomePage;