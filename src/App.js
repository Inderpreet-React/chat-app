import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import PageNotFound from "./pages/PageNotFound";
import { useAuth } from "./context/AuthContext";

function App() {
	const { currentUser } = useAuth();

	function ProtectedRoute({ children }) {
		if (!currentUser) {
			return <Navigate to="/" />;
		}

		return children;
	}

	function LoginCheck({ children }) {
		if (currentUser) {
			return <Navigate to="/chat" />;
		}
		return children;
	}

	return (
		<Routes>
			<Route
				path="/"
				element={
					<LoginCheck>
						{" "}
						<Login />
					</LoginCheck>
				}
			/>
			<Route
				path="/signup"
				element={
					<LoginCheck>
						<Signup />
					</LoginCheck>
				}
			/>
			<Route
				path="/chat"
				element={
					<ProtectedRoute>
						<Chat />
					</ProtectedRoute>
				}
			/>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
