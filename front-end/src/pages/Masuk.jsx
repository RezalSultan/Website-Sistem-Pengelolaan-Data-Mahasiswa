import HOC from "../components/HOC"
import "./styles/masuk.css"
import { IconEyeCheck, IconEyeOff, IconLock, IconUser } from "@tabler/icons";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Masuk = () => {
   const [username, setUsername] = useState("")
   const [passwordsAdmin, setPasswordAdmin] = useState("")
   const navigate = useNavigate()

   const[loginStatus, setLoginStatus] = useState("")

   const login = async (e) => {
      e.preventDefault()
      try {
         if (username === "" || password === "") {
            setLoginStatus("Input tidak boleh kosong!")
            return
         }
         const response = await axios.post("http://localhost:5000/login", {
            username: username,
            password: passwordsAdmin
         })
         console.log(response.data)
         if (response.data.message === "anda berhasil login") {
            navigate("/kelola-data-mahasiswa")
         } else {
            setLoginStatus(response.data.message)
         }
      } catch (error) {
         setLoginStatus("Terjadi kesalahan saat login")
      }
   }

    const [password, setPassword] = useState(false)

  return (
    <HOC title="Masuk">
        <div className="container-halaman-masuk">
            <div className="left-side-register">
               <h3>{loginStatus}</h3>
                <div className="wrapper-login">
                    <div className="login-title">
                        <h4>Selamat Datang di Sistem Informasi Pengelolaan Data Mahasiswa</h4>
                        <p>
                        Pengelolaan data mahasiswa menjadi lebih cepat, mudah dan efesien.
                        </p>
                    </div>
                    <form onSubmit={login} className="login-input-section">
                        <div className="wrapper-login-section">
                            <p>Username</p>
                            <div className="input-login">
                                <IconUser/>
                                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                        <div className="wrapper-login-section">
                            <p>Password</p>
                            <div className="input-login">
                                <IconLock/>
                                <input type={ password ? "text" : "password"} placeholder="password" value={passwordsAdmin} onChange={(e) => setPasswordAdmin(e.target.value)}/>
                               {password ? <IconEyeCheck className="password-check" onClick={()=>setPassword(!password)}/> :<IconEyeOff className="password-check" onClick={()=>setPassword(!password)}/> }
                            </div>
                        </div>
                        <Button model="PRIMARY" type="submit">Masuk</Button>
                    </form>
                </div>
            </div>
            <div className="right-side-login">
                <p>Copyright © 2022 Muhammad Rezal Sultan. All rights reserved.</p>
                <img src="/background-masuk.png" alt="background-masuk"/>
            </div>
        </div>
    </HOC>
  )
}

export default Masuk;