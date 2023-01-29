import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import MessagingSvg from "../images/messagingSvg.svg";
import Avatar from "../images/avatar.png";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import ChatDetails from "../components/ChatDetails";
import ChatBox from "../components/ChatBox";
import Search from "../components/Search";
import { doc, onSnapshot } from "firebase/firestore";
import { useChat } from "../context/ChatContext";

export default function Chat() {
	const [chats, setChats] = useState([]);
	const [loading, setLoading] = useState(false);
	const { currentUser } = useAuth();
	const { dispatch, data } = useChat();
	const navigate = useNavigate();

	useEffect(() => {
		function getChats() {
			const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
				setChats(doc.data());
			});
			return () => {
				unsub();
			};
		}

		currentUser.uid && getChats();
	}, [currentUser.uid]);

	function handlerSelect(u) {
		dispatch({ type: "CHANGE_USER", payload: u });
	}

	function logOutHandler() {
		if (!loading) {
			try {
				setLoading(true);
				signOut(auth);
				navigate("/");
			} catch (error) {
				console.log(error.code, error.message);
			} finally {
				setLoading(false);
			}
		} else return;
	}

	return (
		<PageWrapper additionalClasses="divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-700">
			<div className="flex h-1/2 w-full flex-col gap-4 p-2 md:h-full md:w-1/3 md:p-0">
				<div className="flex justify-between">
					<h1 className="flex h-full items-end text-2xl font-semibold text-indigo-500">
						Bruh Chat
					</h1>
					<div className="flex items-center justify-center gap-2 md:gap-4">
						<span className="font-semibold text-gray-600">
							{currentUser.displayName}
						</span>
						<img
							src={currentUser.photoURL || Avatar}
							alt="Avatar"
							className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-indigo-600"
						/>
						<div className="group relative">
							<ArrowRightOnRectangleIcon
								onClick={logOutHandler}
								className="h-8 w-8 cursor-pointer text-indigo-400 hover:text-indigo-600"
							/>
							<p className="absolute bottom-full left-1/4 font-semibold text-indigo-600 opacity-0 group-hover:opacity-100">
								Logout
							</p>
						</div>
					</div>
				</div>
				<Search />

				<div className="h-full overflow-hidden overflow-y-auto rounded bg-indigo-100 p-1 md:bg-indigo-200">
					<ul className="flex flex-col gap-2 divide-y-2 divide-indigo-600 ">
						{chats
							? Object.entries(chats)
									.sort((a, b) => b[1].date - a[1].date)
									.map((chat) => (
										// console.log(chat)
										<ChatDetails
											key={chat[0]}
											name={chat[1].userInfo.displayName}
											avatar={chat[1].userInfo.photoURL}
											lastMessage={chat[1].lastMessage?.text}
											details={chat[1]}
											handlerSelect={handlerSelect}
										/>
									))
							: ""}
					</ul>
				</div>
			</div>
			<div className="h-1/2 w-full p-2 md:h-full md:w-2/3 md:p-0 md:pl-8">
				<div className="relative flex h-full w-full flex-col items-center justify-center text-gray-600 ">
					{console.log(data)}
					{!data.chatId ? (
						<>
							<img
								src={MessagingSvg}
								alt="Messaging"
								className="h-72 w-72 md:h-96 md:w-96"
							/>
							<p>Send and recieve messages with Bruh Chat.</p>
						</>
					) : (
						<ChatBox />
					)}
				</div>
			</div>
		</PageWrapper>
	);
}
