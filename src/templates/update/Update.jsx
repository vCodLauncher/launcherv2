import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../modules/update/Update.css';

const { ipcRenderer } = window.require('electron');

export default function Update() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('Checking for update');
    const [progressStyle, setProgressStyle] = useState({ display: 'none' });
    const [progressValue, setProgressValue] = useState(0);
    const [dots, setDots] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirige vers la page de connexion si aucun token n'est trouvé
            return;
        }

        const dotInterval = window.setInterval(() => {
            setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'));
        }, 500);

        setTimeout(() => {
            ipcRenderer
                .invoke('startUpdatedGame')
                .catch((error) => {
                    console.error('Error starting updated game:', error);
                });
        }, 6000);

        setTimeout(() => {
            setMessage('Installing Update');
            setProgressStyle({ display: 'block' });

            let i = 0;
            const interval = setInterval(() => {
                if (i <= 100) {
                    setProgressValue(i);
                    i++;
                } else {
                    clearInterval(interval);
                    setProgressStyle({ display: 'none' });
                    setMessage('Starting Launcher');
                    setTimeout(() => {
                        ipcRenderer
                            .invoke('startUpdatedGame')
                            .catch((error) => {
                                console.error('Error starting updated game:', error);
                            });
                    }, 3000);
                }
            }, 20);

            return () => {
                clearInterval(interval);
                clearInterval(dotInterval);
            };
        }, 3000);

        return () => {
            clearInterval(dotInterval);
        };
    }, [navigate]);

    return (
        <>
            <div className="container">
                <img alt="logo" className="logo" src="/assets/logo/app/codlite_logo.png" />

                <h4 className="message">
                    {message}
                    <span id="wait">{dots}</span>
                </h4>

                <progress
                    className="progress progress1"
                    max="100"
                    value={progressValue}
                    style={progressStyle}
                ></progress>
            </div>
        </>
    );
}
