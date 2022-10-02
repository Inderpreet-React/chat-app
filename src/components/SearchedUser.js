import React from "react";

export default function SearchedUser(props) {
	const name = props.name;
	const avatar = props.avatar;

	return (
		<div className="absolute left-0 top-[103%] h-fit w-full bg-gray-100 p-2 shadow-md md:top-[101%]">
			<div
				className="flex cursor-pointer items-center gap-4 rounded bg-indigo-200 p-2"
				onClick={props.handlerSelect}
			>
				<img src={avatar} alt="Avatar" className="h-10 w-10 rounded-full" />
				<div>
					<h4 className="text-xl font-semibold">{name}</h4>
				</div>
			</div>
		</div>
	);
}
