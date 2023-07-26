import { useCallback, useEffect, useState } from "react";
let logoutTimer;

export const useAuth = () => {
  const [token, settoken] = useState(false);
  const [userId, setuserId] = useState();
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback((userId, token, expirationDate) => {
    settoken(token);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: userId,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
    setuserId(userId);
  }, []);

  const logout = useCallback(() => {
    settoken(null);
    setuserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);
  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);
  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("userData")); // Stored data isobject now
    if (
      storeData &&
      storeData.token &&
      new Date(storeData.expiration) > new Date()
    ) {
      login(storeData.userId, storeData.token, new Date(storeData.expiration));
    }
  }, [login]);
  return {token,login,logout,userId}
};
