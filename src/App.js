import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import PageNotFound from "./pages/PageNotFound";
import { useAuth } from "./context/AuthContext";

function App() {
	const { currentUser } = useAuth();
	console.log(currentUser);

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/chat" element={<Chat />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
