import React from "react";
import { Link } from "react-router-dom";
import SignupSvg from "../images/signupSvg.svg";

export default function Signup() {
	const inputClasses =
		"w-full rounded border-gray-400 bg-gray-100 h-12 shadow-md shadow-gray-500/30 focus:shadow-indigo-500/30 focus:border-indigo-500 transition-all";
	const inputsWrapper = "flex gap-4 flex-col";

	return (
		<div className="h-screen w-full bg-gray-100 md:p-8">
			<div className="relative flex h-full w-full flex-col items-center justify-center gap-6 border-2 border-gray-800 bg-indigo-100 pt-0 md:flex-row md:justify-start md:p-8">
				<h1 className="absolute top-5 left-5 text-xl font-extrabold text-indigo-500 md:text-3xl">
					Bruh chat
				</h1>

				<div className="flex h-1/4 w-full items-center justify-center bg-indigo-100 md:order-last md:h-3/4 md:w-2/3">
					<img
						src={SignupSvg}
						alt="login"
						className="h-5/6 w-5/6 md:h-full md:w-full"
					/>
				</div>

				<div className="flex h-3/4 w-3/4 flex-col md:h-5/6 md:w-1/2 md:p-4 md:pl-8">
					<div className="flex h-1/6 w-full items-center  justify-between md:pl-[25%]">
						<h1 className="text-4xl font-bold text-gray-600">Sign up</h1>
						<Link
							to="/"
							className="text-xl font-semibold italic text-indigo-600 underline underline-offset-8"
						>
							Log in
						</Link>
					</div>

					<form className="mt-12 flex h-1/2 w-full flex-col justify-evenly gap-4 md:mt-24 md:w-3/4 md:self-end">
						<div className={inputsWrapper}>
							<p className="text-gray-600">Email</p>
							<input
								className={inputClasses}
								type="email"
								placeholder="eldermaster@69.com"
							/>
						</div>
						<div className={inputsWrapper}>
							<p className="text-gray-600">Username</p>
							<input
								className={inputClasses}
								type="text"
								placeholder="Eldermaster69"
							/>
						</div>
						<div className={inputsWrapper}>
							<p className="text-gray-600">Password</p>
							<input
								className={inputClasses}
								type="password"
								placeholder="**********"
							/>
						</div>
						<button
							className="mt-4 w-1/2 self-end rounded bg-indigo-500 px-8 py-3 font-semibold text-white transition hover:bg-indigo-600 md:mt-8 md:w-2/3"
							type="submit"
						>
							Sign up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
