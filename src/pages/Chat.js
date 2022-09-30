import React from "react";
import PageWrapper from "../PageWrapper";
import MessagingSvg from "../images/messagingSvg.svg";
import Avatar from "../images/avatar.png";

export default function Chat() {
	return (
		<PageWrapper additionalClasses="divide-y-2 md:divide-y-0 md:divide-x-2 divide-indigo-500">
			<div className="flex h-1/3 w-full flex-col gap-4 p-2 md:h-full md:w-1/3 md:p-0">
				<div className="flex justify-between">
					<h1 className="flex h-full items-end text-2xl font-semibold text-indigo-500">
						Bruh Chat
					</h1>
					<img src={Avatar} alt="Avatar" className="h-10 w-10" />
				</div>
				<input type="text" placeholder="Search" className="w-full" />
			</div>
			<div className="h-2/3 w-full p-2 md:h-full md:w-2/3 md:p-0 md:pl-8">
				<div className="flex h-full w-full items-center justify-center">
					<img
						src={MessagingSvg}
						alt="Messaging"
						className="h-72 w-72 md:h-96 md:w-96"
					/>
				</div>
			</div>
		</PageWrapper>
	);
}
