import { usersApi } from "@api";
import { LoginFormType, SignUpPayload } from "@types";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts";

const useAuth = () => {
  const { me, setCurrentUser } = useContext(AuthContext);
  useEffect(() => {
    loginWithToken();
  }, []);
  const setUserToken = async (id: string) => {
    const newToken = Math.random().toString(36).substring(2);
    const resp = await usersApi.patch(id, { sessionToken: newToken });
    return resp ? newToken : null;
  };
  const login = async ({ email, pass }: LoginFormType) => {
    const users = await usersApi.getAll();
    if (users) {
      const logged = users.find(
        (user) => user.email === email && user.password === pass
      );

      if (logged) {
        const token = await setUserToken(logged.id);
        if (token) {
          localStorage.setItem("user-token", token);
          setCurrentUser(logged);
        }
      }
    }
  };
  const loginWithToken = async () => {
    const users = await usersApi.getAll();
    const storedToken = localStorage.getItem("user-token");
    const logged = users.find((user) => user.sessionToken === storedToken);
    if (!me && logged) {
      setCurrentUser(logged);
    }
  };

  const logout = () => {
    console.log(me);
    me && usersApi.patch(me.id, { sessionToken: null });
    setCurrentUser(undefined);
  };
  const sigup = async (user: SignUpPayload) => {
    const addUser = await usersApi.add(user);

    return addUser;
  };
  return { login, logout, sigup, loginWithToken, me };
};
export { useAuth };
