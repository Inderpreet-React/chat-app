import { createContext, useContext, useReducer } from "react";
import { useAuth } from "../context/AuthContext";

export const ChatContext = createContext();

export function useChat() {
	return useContext(ChatContext);
}

export function ChatContextProvider({ children }) {
	const { currentUser } = useAuth();

	const initialState = {
		chatId: "null",
		user: {},
	};

	function chatReducer(state, action) {
		switch (action.type) {
			case "CHANGE_USER":
				return {
					user: action.payload,
					chatId:
						currentUser.uid > action.payload.uid
							? currentUser.uid + action.payload.uid
							: action.payload.uid + currentUser.uid,
				};
			default:
				return;
		}
	}

	const [state, dispatch] = useReducer(chatReducer, initialState);

	const value = { data: state, dispatch };

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
