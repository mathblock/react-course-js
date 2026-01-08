import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Charger l'utilisateur depuis localStorage au démarrage
  useEffect(() => {
    const storedUser = localStorage.getItem('foodtruck_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erreur lors du chargement de l\'utilisateur:', error);
        localStorage.removeItem('foodtruck_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    // Vérifier les credentials (simulation - en production, appel API)
    const storedUsers = JSON.parse(localStorage.getItem('foodtruck_users') || '[]');
    const foundUser = storedUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        phone: foundUser.phone,
        address: foundUser.address,
        orders: foundUser.orders || []
      };
      setUser(userData);
      localStorage.setItem('foodtruck_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Email ou mot de passe incorrect' };
  };

  const register = (userData) => {
    const storedUsers = JSON.parse(localStorage.getItem('foodtruck_users') || '[]');
    
    // Vérifier si l'email existe déjà
    if (storedUsers.find(u => u.email === userData.email)) {
      return { success: false, error: 'Cet email est déjà utilisé' };
    }

    const newUser = {
      id: Date.now().toString(),
      ...userData,
      orders: [],
      createdAt: new Date().toISOString()
    };

    storedUsers.push(newUser);
    localStorage.setItem('foodtruck_users', JSON.stringify(storedUsers));

    // Connecter automatiquement après inscription
    const userToStore = {
      id: newUser.id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phone: newUser.phone,
      address: newUser.address,
      orders: []
    };
    setUser(userToStore);
    localStorage.setItem('foodtruck_user', JSON.stringify(userToStore));
    
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('foodtruck_user');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('foodtruck_user', JSON.stringify(updatedUser));

    // Mettre à jour aussi dans la liste des utilisateurs
    const storedUsers = JSON.parse(localStorage.getItem('foodtruck_users') || '[]');
    const userIndex = storedUsers.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      storedUsers[userIndex] = { ...storedUsers[userIndex], ...updatedData };
      localStorage.setItem('foodtruck_users', JSON.stringify(storedUsers));
    }
  };

  const addOrder = (orderData) => {
    const order = {
      id: Date.now().toString(),
      ...orderData,
      date: new Date().toISOString(),
      status: 'En préparation'
    };

    const updatedUser = {
      ...user,
      orders: [...(user.orders || []), order]
    };

    setUser(updatedUser);
    localStorage.setItem('foodtruck_user', JSON.stringify(updatedUser));

    // Mettre à jour aussi dans la liste des utilisateurs
    const storedUsers = JSON.parse(localStorage.getItem('foodtruck_users') || '[]');
    const userIndex = storedUsers.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      storedUsers[userIndex].orders = updatedUser.orders;
      localStorage.setItem('foodtruck_users', JSON.stringify(storedUsers));
    }

    return order;
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    addOrder,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
