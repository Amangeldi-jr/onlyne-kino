import React, { useEffect, useState } from "react";
import ProfileSettings from "../components/ProfileSettings.jsx";

const ProfilePage = () => {
    const [userInitial, setUserInitial] = useState("");

    useEffect(() => {
        const storedInitial = localStorage.getItem("userInitial");
        if (storedInitial) {
            setUserInitial(storedInitial);
        }
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen flex justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-blue-500 text-white text-4xl flex items-center justify-center rounded-full">
                    {userInitial || "?"}
                </div>
                <h2 className="text-white text-xl mt-4">Ваш профиль</h2>
                <ProfileSettings/>
            </div>
        </div>
    );
};

export default ProfilePage;
