import React, { useState } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SearchedUser from "./SearchedUser";

export default function Search() {
	const [userName, setUserName] = useState("");
	const [user, setUser] = useState(null);
	const [error, setError] = useState(false);

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
						console.log(user.data());
						setUser(user.data());
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
							setUserName(null);
						}}
					/>
				</div>
			)}
			{user ? (
				<SearchedUser name={user.displayName} avatar={user.photoURL} />
			) : (
				""
			)}
		</div>
	);
}
