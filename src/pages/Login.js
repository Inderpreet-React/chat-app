import React from "react";
import PageWrapper from "../PageWrapper";
import { Link } from "react-router-dom";
import LoginSvg from "../images/loginSvg.svg";

export default function Login() {
	return (
		<PageWrapper>
			<h1 className="absolute top-5 left-5 text-xl font-extrabold text-indigo-500 md:text-3xl">
				Bruh chat
			</h1>
			<div className="h-1/4 w-full bg-indigo-100 md:order-last md:h-3/4 md:w-2/3">
				<img src={LoginSvg} alt="login" className="h-full w-full" />
			</div>

			<div className="flex h-3/4 w-3/4 flex-col md:h-5/6 md:w-1/2 md:p-4 md:pl-8">
				<div className="flex h-1/6 w-full items-center  justify-between md:pl-[25%]">
					<h1 className="text-4xl font-bold text-gray-600">Log in</h1>
					<Link
						to="/signup"
						className="text-xl font-semibold italic text-indigo-600 underline underline-offset-8"
					>
						Sign up
					</Link>
				</div>

				<form className="mt-12 flex h-1/2 w-full flex-col justify-evenly gap-6 md:mt-24 md:w-3/4 md:self-end">
					<div className="input-wrapper">
						<p className="text-gray-600">Username</p>
						<input type="text" placeholder="Eldermaster69" />
					</div>
					<div className="input-wrapper">
						<p className="text-gray-600">Password</p>
						<input type="password" placeholder="**********" />
					</div>
					<button
						className="mt-4 w-1/2 self-end rounded bg-indigo-500 px-8 py-3 font-semibold text-white transition hover:bg-indigo-600 md:mt-8 md:w-2/3"
						type="submit"
					>
						Log in
					</button>
				</form>
			</div>
		</PageWrapper>
	);
}
