import React, { useState } from "react";
import { FaVk, FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const ProfileSettings = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("Россия");
    const [city, setCity] = useState("Москва");
    const [genre, setGenre] = useState([]);
    const [bio, setBio] = useState("");
    const [socialLinks, setSocialLinks] = useState({
        vk: "",
        youtube: "",
        instagram: "",
        twitter: "",
        facebook: "",
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="bg-[#0F172A] min-h-screen flex justify-center items-center p-4">
            <div className="bg-[#1E293B] w-full max-w-4xl p-6 rounded-lg shadow-lg border border-blue-500">
                <h2 className="text-white text-2xl font-semibold mb-4">Настройки профиля</h2>

                <div className="flex gap-6">
                    {/* Секция: Фото профиля */}
                    <div className="w-1/3 flex flex-col items-center">
                        <div className="w-40 h-40 rounded-lg overflow-hidden">
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-300">
                                    Фото
                                </div>
                            )}
                        </div>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="fileUpload" />
                        <label htmlFor="fileUpload" className="mt-3 bg-blue-500 px-4 py-2 text-white rounded cursor-pointer">
                            Загрузить
                        </label>

                        {/* Социалдык тармактар */}
                        <div className="mt-4 space-y-2 w-full">
                            {[
                                { icon: FaVk, name: "vk", placeholder: "https://vk.com/" },
                                { icon: FaYoutube, name: "youtube", placeholder: "https://youtube.com/" },
                                { icon: FaInstagram, name: "instagram", placeholder: "https://instagram.com/" },
                                { icon: FaTwitter, name: "twitter", placeholder: "https://twitter.com/" },
                                { icon: FaFacebook, name: "facebook", placeholder: "https://facebook.com/" },
                            ].map(({ icon: Icon, name, placeholder }, index) => (
                                <div key={index} className="flex items-center bg-gray-800 p-2 rounded">
                                    <Icon className="text-white text-xl mr-2" />
                                    <input
                                        type="text"
                                        placeholder={placeholder}
                                        className="bg-transparent text-white w-full outline-none"
                                        value={socialLinks[name]}
                                        onChange={(e) => setSocialLinks({ ...socialLinks, [name]: e.target.value })}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Секция: Анкета */}
                    <div className="w-2/3 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Имя"
                                className="bg-gray-700 text-white p-2 rounded outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Фамилия"
                                className="bg-gray-700 text-white p-2 rounded outline-none"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <select
                                className="bg-gray-700 text-white p-2 rounded outline-none"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">Пол</option>
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>
                            </select>
                            <input
                                type="date"
                                className="bg-gray-700 text-white p-2 rounded outline-none"
                                value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                className="bg-gray-700 text-white p-2 rounded outline-none"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            <input
                                type="text"
                                className="bg-gray-700 text-white p-2 rounded outline-none"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <select
                            multiple
                            className="bg-gray-700 text-white p-2 rounded outline-none w-full"
                            value={genre}
                            onChange={(e) => setGenre([...e.target.selectedOptions].map((o) => o.value))}
                        >
                            <option value="Драма">Драма</option>
                            <option value="Триллер">Триллер</option>
                            <option value="Документальный">Документальный</option>
                        </select>

                        <textarea
                            placeholder="Информация о себе"
                            className="bg-gray-700 text-white p-2 rounded outline-none w-full h-24"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />

                        <button className="bg-blue-500 text-white px-4 py-2 rounded float-right">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
