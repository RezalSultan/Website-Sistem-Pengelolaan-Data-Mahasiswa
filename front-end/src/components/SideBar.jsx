import { Users, Logout } from "tabler-icons-react";
import { NavLink } from "react-router-dom";
import "./styles/side_bar.css";

const SideBar = (props)=> {
   return (
   <>
      <aside className="side-bar">
         <h1>Sistem Informasi Pengelolaan Data Mahasiswa</h1>
         <img className="line" src="/pattern-line.svg" alt="pattern-line" />
         <img className="square" src="/pattern-square.svg" alt="pattern-square" />
         <nav className="nav-side-bar">
            <div className={"nav-side " + props.activeSideManagePopulation + " " + props.activeBgManagePopulation}>
               <Users className="icon-nav" />
               <NavLink to="/kelola-data-mahasiswa" className={"side-bar-link " + props.activeSideManagePopulation}>Kelola Data Mahasiswa</NavLink>
            </div>
         </nav>
         <div className={"logout " + props.activeSideLogout + " " + props.activeBgLogout}>
            <Logout className="icon-nav"/>
            <NavLink to="/" className={"side-bar-link " + props.activeSideLogout}>Keluar</NavLink>
         </div>
      </aside>
   </>
   )
}
export default SideBar;