import './styles/header_dashboard.css'
import axios from 'axios';
import { useState } from 'react';

const HeaderDashboard = (props) => {
   const [username, setUsername] = useState("")

   axios.get(`http://localhost:5000/admin`).then(response => { 
      setUsername(response.data.data[0].username)
   })


	return (
		<>
			<header className="header-dashboard">
				<h1>{props.title}</h1>
				<div className="status">
					<div className="welcome">
						<p>
							selamat datang, <strong>{username}</strong>
						</p>
					</div>
				</div>
			</header>
		</>
	);
};

export default HeaderDashboard;