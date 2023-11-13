import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsChecking(false);
            return;
        }

        fetch('http://85.209.176.44:3002/auth/getMe', { // Remplacez par l'URL de votre API
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    setIsLoggedIn(true);
                } else {
                    localStorage.removeItem('token'); // Supprimer le token s'il n'est plus valide
                }
                setIsChecking(false);
            })
            .catch(() => {
                setIsChecking(false);
            });
    }, []);

    if (isChecking) {
        return <div>Loading...</div>; // Ou tout autre indicateur de chargement
    }

    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
