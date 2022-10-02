import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				console.log(user);
				// ...
			} else {
				setCurrentUser({});
			}
		});

		return () => {
			unsub();
		};
	}, []);

	const value = {
		currentUser,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
