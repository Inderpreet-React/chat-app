import React, { useState } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
	collection,
	query,
	where,
	getDocs,
	getDoc,
	setDoc,
	doc,
	updateDoc,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import SearchedUser from "./SearchedUser";

export default function Search() {
	const [userName, setUserName] = useState("");
	const [user, setUser] = useState(null);
	const [error, setError] = useState(false);
	const { currentUser } = useAuth();

	async function handlerSelect() {
		const combinedId =
			currentUser.uid > user.uid
				? currentUser.uid + user.uid
				: user.uid + currentUser.uid;
		try {
			const response = await getDoc(doc(db, "chats", combinedId));

			if (!response.exists()) {
				console.log("user does not exist creating user...");
				await setDoc(doc(db, "chats", combinedId), { messages: [] });

				await updateDoc(doc(db, "userChats", currentUser.uid), {
					[combinedId + ".userInfo"]: {
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL,
					},
					[combinedId + ".date"]: serverTimestamp(),
				});

				await updateDoc(doc(db, "userChats", user.uid), {
					[combinedId + ".userInfo"]: {
						uid: currentUser.uid,
						displayName: currentUser.displayName,
						photoURL: currentUser.photoURL,
					},
					[combinedId + ".date"]: serverTimestamp(),
				});
			} else {
				console.log("Chat already exists");
			}
		} catch (e) {
			console.log(e);
		}
		setUser(null);
		setUserName("");
	}

	async function searchUser() {
		if (userName) {
			console.log("request send");
			setError(false);
			const usersRef = collection(db, "users");
			const q = query(usersRef, where("displayName", "==", userName));
			setUser("");
			try {
				const querySnapshot = await getDocs(q);
				if (querySnapshot.size === 0) {
					console.log("if ran");
					setError(true);
				} else {
					console.log("else ran");
					querySnapshot.forEach((user) => {
						console.log("snapshot ran");
						console.log(user.data().uid, currentUser.uid);
						if (user.data().uid === currentUser.uid) {
							console.log("trying to add yourself");
							setError(true);
						} else {
							setUser(user.data());
						}
					});
				}
			} catch (e) {
				console.log(e);
				setError(true);
			}
		} else return;
	}

	function handleKey(e) {
		e.code === "Enter" && searchUser();
	}

	return (
		<div className="relative">
			<div className="relative flex">
				<input
					type="text"
					placeholder="Search friend"
					className="w-full"
					onChange={(e) => {
						setUserName(e.target.value);
						if (e.target.value.length === 0) {
							setUser(null);
						}
					}}
					onKeyDown={handleKey}
					value={userName}
				/>
				<div className="absolute top-0 right-0 flex h-full cursor-pointer items-center justify-center pr-4">
					<MagnifyingGlassIcon className="h-7 w-7  text-gray-600 hover:text-indigo-500" />
				</div>
			</div>
			{error && (
				<div className="absolute top-[102%] left-0 flex w-full cursor-pointer items-center justify-between gap-4 rounded bg-gray-100 p-2">
					<p className="font-semibold text-pink-500 ">User Not Found!</p>
					<XMarkIcon
						className="h-7 w-7 cursor-pointer hover:text-pink-500"
						onClick={() => {
							setError(false);
							setUser(null);
							setUserName("");
						}}
					/>
				</div>
			)}
			{user ? (
				<SearchedUser
					name={user.displayName}
					avatar={user.photoURL}
					handlerSelect={handlerSelect}
				/>
			) : (
				""
			)}
		</div>
	);
}
