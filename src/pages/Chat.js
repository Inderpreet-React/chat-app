import React from "react";
import PageWrapper from "../PageWrapper";
import MessagingSvg from "../images/messagingSvg.svg";
import Avatar from "../images/avatar.png";
import ChatDetails from "../components/ChatDetails";

export default function Chat() {
	return (
		<PageWrapper additionalClasses="divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-700">
			<div className="flex h-1/2 w-full flex-col gap-4 p-2 md:h-full md:w-1/3 md:p-0">
				<div className="flex justify-between">
					<h1 className="flex h-full items-end text-2xl font-semibold text-indigo-500">
						Bruh Chat
					</h1>
					<img src={Avatar} alt="Avatar" className="h-10 w-10" />
				</div>
				<input type="text" placeholder="Search" className="w-full" />
				<div className="h-full overflow-hidden overflow-y-auto rounded bg-indigo-200 p-1">
					<ul className="flex flex-col gap-2 divide-y-2 divide-indigo-600 ">
						<ChatDetails
							name="Something"
							lastMessage="Good Bye"
							avatar={Avatar}
						/>
						<ChatDetails name="Bruh" lastMessage="Hey" avatar={Avatar} />
					</ul>
				</div>
			</div>
			<div className="h-1/2 w-full p-2 md:h-full md:w-2/3 md:p-0 md:pl-8">
				<div className="flex h-full w-full flex-col items-center justify-center text-gray-600">
					<img
						src={MessagingSvg}
						alt="Messaging"
						className="h-72 w-72 md:h-96 md:w-96"
					/>
					<p>Send and recieve messages with Bruh Chat.</p>
				</div>
			</div>
		</PageWrapper>
	);
}
