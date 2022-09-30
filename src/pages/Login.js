import React from "react";
import LoginSvg from "../images/loginSvg.svg";

export default function Login() {
	const inputClasses =
		"w-full rounded border-gray-400 bg-gray-100 h-12 shadow-md shadow-gray-500/30 focus:shadow-indigo-500/30 focus:border-indigo-500 transition-all";
	const inputsWrapper = "flex gap-4 flex-col";

	return (
		<div className="h-screen w-full bg-gray-100 md:p-8">
			<div className="relative flex h-full w-full flex-col items-center justify-center gap-6 border-2 border-gray-800 bg-indigo-100 pt-0 md:flex-row md:justify-start md:p-8">
				<h1 className="absolute top-5 left-5 text-xl font-extrabold text-indigo-500 md:text-3xl">
					Bruh chat
				</h1>
				<div className="h-1/4 w-full bg-indigo-100 md:order-last md:h-3/4 md:w-2/3">
					<img src={LoginSvg} alt="login" className="h-full w-full" />
				</div>

				<div className="flex h-3/4 w-3/4 flex-col md:h-5/6 md:w-1/2 md:p-4 md:pl-8">
					<h1 className="h-1/6 w-full text-4xl font-bold text-gray-600 md:pl-[25%]">
						Log in
					</h1>

					<form className="flex h-1/2 w-full flex-col justify-evenly gap-6 md:mt-20 md:w-3/4 md:self-end">
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
							Log in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
