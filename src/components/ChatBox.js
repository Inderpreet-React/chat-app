import React from "react";
import ChatMessages from "./ChatMessages";

export default function ChatBox() {
	return (
		<div className="relative h-full w-full overflow-hidden overflow-y-auto  border-2 border-gray-600 p-2 md:p-4">
			<ul className="mb-20 flex flex-col items-end gap-4">
				<ChatMessages isUser={false} message={"Yo bro"} />
				<ChatMessages isUser={true} message={"hello man"} />
				<ChatMessages isUser={false} message={"ki kr reha va"} />
				<ChatMessages isUser={true} message={"kuch nahi bs vehle"} />
				<ChatMessages isUser={false} message={"Yo bro"} />
				<ChatMessages isUser={true} message={"hello man"} />
				<ChatMessages isUser={false} message={"ki kr reha va"} />
				<ChatMessages isUser={true} message={"kuch nahi bs vehle"} />
				<ChatMessages isUser={false} message={"Yo bro"} />
				<ChatMessages isUser={true} message={"hello man"} />
				<ChatMessages isUser={false} message={"ki kr reha va"} />
				<ChatMessages isUser={true} message={"kuch nahi bs vehle"} />
				<ChatMessages isUser={false} message={"Yo bro"} />
				<ChatMessages isUser={true} message={"hello man"} />
				<ChatMessages isUser={false} message={"ki kr reha va"} />
				<ChatMessages isUser={true} message={"kuch nahi bs vehle"} />
			</ul>
		</div>
	);
}
