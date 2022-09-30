import React from "react";

export default function ChatDetails(props) {
	const avatar = props.avatar;
	const name = props.name || "Name";
	const lastMessage = props.lastMessage || "Last Chat";

	return (
		<li className="flex h-full items-center gap-4">
			<img src={avatar} alt="Avatar" className="h-14 w-14" />
			<div>
				<h4 className="text-xl font-semibold">{name}</h4>
				<p className="text-sm">{lastMessage}</p>
			</div>
		</li>
	);
}
