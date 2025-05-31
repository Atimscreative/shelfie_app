import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  // LOGIN
  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      setUser(await account.get());
    } catch (error) {
      throw Error(error.message);
    }
  }

  // REGISTER
  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
      setUser(await account.get());
    } catch (error) {
      throw Error(error.message);
    }
  }

  // LOGOUT
  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  // GET CURRENT LOGIN USER
  async function init() {
    try {
      setUser(await account.get());
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ user, register, login, logout, authChecked }}>
      {children}
    </UserContext.Provider>
  );
}
