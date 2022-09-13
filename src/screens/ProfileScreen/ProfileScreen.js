import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { AVATAR_URL } from "../../config";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./ProfileScreen.css";

function ProfileScreen() {
	const user = useSelector(selectUser);

	return (
		<div className="profileScreen">
			<NavBar />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img
						src={AVATAR_URL}
						alt="Netflix default avatar smiley face"
					/>
					<div className="profileScreen__details">
						<h2>{user.email}</h2>
						<div className="profileScreen__plans">
							<h3>Plans</h3>
							<button
								onClick={() => auth.signOut()}
								className="profileScreen__signOut"
							>
								Sing Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ProfileScreen;
