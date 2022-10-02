import React from "react";

export default function ChatDetails(props) {
	const avatar = props.avatar;
	const name = props.name;
	const lastMessage = props.lastMessage || "Last Message";

	return (
		<li className="flex h-full cursor-pointer items-center gap-4">
			<img src={avatar} alt="Avatar" className="h-10 w-10 rounded-full" />
			<div>
				<h4 className="text-xl font-semibold">{name}</h4>
				<p className="text-sm">{lastMessage}</p>
			</div>
		</li>
	);
}
