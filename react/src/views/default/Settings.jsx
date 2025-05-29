import { useState, useEffect } from 'react';
import axiosClient from '../../axios-client';
import { useNavigate } from "react-router-dom"
import styles from "./../../css/layouts/guest/Signup-Login.module.css";
import { useStateContext } from "../../contexts/StateContext";

const Settings = () => {
    const { setToken } = useStateContext();
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        photo: null,
    });
    const [userId, setUserId] = useState(null);
    const [message, setMessage] = useState('');
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUserId(data.id_user);
            })
            .catch(error => {
                console.error('Помилка при отриманні поточного користувача', error);
            });
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = e => {
        const file = e.target.files[0];
        setUser(prev => ({ ...prev, photo: file }));

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', user.name);
        formData.append('surname', user.surname || '');
        formData.append('email', user.email);
        if (user.password) {
            formData.append('password', user.password);
        }
        if (user.photo) {
            formData.append('photo', user.photo);
        }
        formData.append("_method", "PUT");
        try {
            const response = await axiosClient.post(`/users/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Помилка при оновленні користувача', error);
            setMessage('Помилка при оновленні');
        }
    };

   const handleDelete = async () => {
    if (!window.confirm("Ви дійсно хочете видалити акаунт?")) {
        return;
    }

    try {
        await axiosClient.delete(`/users/${userId}`).then(() => {
            setUser({});
            setToken(null);
            setMessage("Акаунт успішно видалено");
            navigate("/");
        });
    } catch (error) {
        console.error("Помилка при видаленні акаунта", error);
        setMessage("Помилка при видаленні акаунта");
    }
};

    return (
        <div className={styles.update}>

            {message && <div className={styles.errors}>{message}</div>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <h1>Оновити користувача</h1>
                <div className={styles["input-container"]}>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder=''
                    />
                    <label>Ім’я</label>
                </div>
                <div className={styles["input-container"]}>
                    <input
                        type="text"
                        name="surname"
                        value={user.surname || ''}
                        onChange={handleChange}
                        placeholder=''
                    />
                    <label>Прізвище</label>
                </div>
                <div className={styles["input-container"]}>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder=''
                    />
                    <label>Email</label>
                </div>
                <div className={styles["input-container"]}>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder=''
                    />
                    <label>Пароль</label>
                </div>
                <div className={styles["input-container-img"]}>

                    <div className={styles["file-wrapper"]}>
                        <button
                            type="button"
                            onClick={() => document.getElementById('fileInput').click()}
                            className={styles["file-button"]}
                        >
                            Обрати файл для фото
                        </button>
                        <span className={styles["file-name"]}>
                            {user.photo ? user.photo.name : "Файл не обрано"}
                        </span>
                    </div>

                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={styles["file-input"]}
                    />

                    {preview && (
                        <img src={preview} alt="Превʼю" className={styles["preview-image"]} />
                    )}
                </div>
                <div>
                    <button type="submit">
                        Оновити
                    </button></div>
                <div>
                    <button
                        type="button"
                        onClick={handleDelete}>
                        Видалити акаунт
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings