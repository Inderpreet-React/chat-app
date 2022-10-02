import React, { useEffect, useState } from "react";
import { useChat } from "../context/ChatContext";
import ChatMessages from "./ChatMessages";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import {
	arrayUnion,
	doc,
	onSnapshot,
	serverTimestamp,
	Timestamp,
	updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { v4 as uuid } from "uuid";

export default function ChatBox() {
	const [messages, setMessages] = useState([]);
	const [text, setText] = useState("");
	const [img, setImg] = useState(null);
	const { data } = useChat();
	const { currentUser } = useAuth();

	useEffect(() => {
		const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
			doc.exists() && setMessages(doc.data().messages);
		});

		return () => {
			unSub();
		};
	}, [data.chatId]);

	async function handleSend() {
		console.log("sending");
		try {
			await updateDoc(doc(db, "chats", data.chatId), {
				messages: arrayUnion({
					id: uuid(),
					text,
					senderId: currentUser.uid,
					date: Timestamp.now(),
				}),
			});
			setText("");

			await updateDoc(doc(db, "userChats", currentUser.uid), {
				[data.chatId + ".lastMessage"]: {
					text,
				},
				[data.chatId + ".date"]: serverTimestamp(),
			});

			await updateDoc(doc(db, "userChats", data.user.uid), {
				[data.chatId + ".lastMessage"]: {
					text,
				},
				[data.chatId + ".date"]: serverTimestamp(),
			});
		} catch (e) {
			console.log(e);
		}
	}

	function handleKey(e) {
		e.code === "Enter" && handleSend();
	}

	return (
		<>
			<div className="absolute top-0 left-0 z-10 h-10 w-full border-2 border-gray-500 bg-indigo-200 p-2 ">
				<span className="text-lg font-semibold text-gray-800">
					{data.user?.displayName}
				</span>
			</div>
			<div className="relative flex h-full w-full flex-col-reverse overflow-hidden overflow-y-auto border-2 border-gray-600 p-2 md:p-4">
				<ul className="mb-20 flex flex-col items-end gap-4 ">
					{messages.map((m) => {
						return (
							<ChatMessages
								isUser={Boolean(currentUser.uid === m.senderId)}
								message={m.text}
								key={m.id}
							/>
						);
					})}
				</ul>
			</div>
			<div className="absolute bottom-0 left-0 flex h-12 w-full overflow-hidden border-2 border-gray-600 bg-gray-100 md:w-full">
				<input
					onChange={(e) => {
						setText(e.target.value);
						if (e.target.value.length === 0) {
							setText("");
						}
					}}
					value={text}
					onKeyDown={handleKey}
					type="text"
					placeholder="Message"
					className="m-1 w-11/12 resize-none rounded-none border-0 bg-gray-100 shadow-none focus:border-transparent focus:shadow-none focus:ring-0"
				/>
				<div
					className="flex h-full w-1/12 cursor-pointer items-center justify-center bg-gray-100"
					onClick={handleSend}
				>
					<ChatBubbleBottomCenterTextIcon className="h-7 w-7 bg-gray-100 text-indigo-500 hover:text-indigo-600  md:h-10 md:w-10" />
				</div>
			</div>
		</>
	);
}
