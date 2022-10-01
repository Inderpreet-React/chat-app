import React from "react";

export default function ChatMessages(props) {
	const isUser = props.isUser;
	const message = props.message;
	return (
		<li
			className={`flex max-w-fit justify-end rounded px-4 py-2 text-white ${
				isUser ? "self-end bg-indigo-400" : "self-start bg-gray-400"
			}`}
		>
			<span className="flex max-h-fit items-end">{message}</span>
		</li>
	);
}
