import React from "react";

export default function Login() {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-gray-100 md:justify-start md:p-12">
			<div className="h-3/4 w-3/4 border-2 border-gray-500 md:w-1/3">
				<h1>Login</h1>
				<form>
					<div>
						<p>Username</p>
						<input type="text" />
					</div>
					<div>
						<p>Password</p>
						<input type="password" />
					</div>
				</form>
			</div>
		</div>
	);
}
