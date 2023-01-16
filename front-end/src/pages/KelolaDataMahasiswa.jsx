import SideBar from "../components/SideBar";
import HeaderDashboard from "../components/HeaderDashboard";
import HOC from "../components/HOC";
import { Search, AdjustmentsHorizontal, Plus, Edit, Trash, File } from "tabler-icons-react";
import { IconEyeCheck} from "@tabler/icons";
import Button from "../components/Button";
import "./styles/kelola_data.css";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

const KelolaDataMahasiswa = () => {
   const [mahasiswas, setMahasiswa] = useState([])
   const [query, setQuery] = useState("");

   useEffect(()=>{
      getMahasiswa()
   },[])

   useEffect(()=>{
      searchMahasiswa()
   }, [query])

   const getMahasiswa = async () => {
      const response = await axios.get('http://localhost:5000/mahasiswa')
      setMahasiswa(response.data.data)
   }

   const deleteMahasiswa = async (idMahasiswa) => {
      try {
         await axios.delete(`http://localhost:5000/mahasiswa/${idMahasiswa}`)
         getMahasiswa()
      } catch (error) {
         console.log(error)
      }
   }

   const searchMahasiswa = async (e) => {
      e.preventDefault()
      const response = await axios.get(`http://localhost:5000/mahasiswa?search=${query}`);
      setMahasiswa(response.data.data);
  }

   return (
      <>
         <HOC title="Kelola Data - Mahasiswa">
            <div className="container">
               <SideBar activeSideManagePopulation="active-side-color" activeBgManagePopulation="active-side"/>
               <div className="container-left">
                  <HeaderDashboard title="Kelola Data Mahasiswa" />
                  <div className="wrapper-header-table-data">
                     <div className="search-data">
                        <Search color="#3AB7FE"/>
                        <input type="search" placeholder="cari data.." value={query} onChange={e => setQuery(e.target.value)} onClick={searchMahasiswa}/>
                     </div>
                     <div className="filter-data">
                        <div className="title-menu-filter-data">
                           <AdjustmentsHorizontal color="#3AB7FE"/>
                           <span>Urutkan Data</span>
                        </div>
                        <ul className="menu-filter-data">
                           <li>halo</li>
                        </ul>           
                     </div>
                  </div>
                  <div className="bg-table-data-children">
                     <div className="wrapper-heading-table">
                        <div className="wrapper-action-button-table">
                           <Link to="/kelola-data-mahasiswa/tambah"><Button model="SM_CREATE" ><Plus />Tambah</Button></Link>
                        </div>
                     </div>
                     <div className="wrapper-table-data">
                        <table className="table-data-children">
                           <tr className="table-title table-title-data-children">
                              <th>No</th>
                              <th>Prodi</th>
                              <th>Semester</th>
                              <th>Kelas</th>
                              <th>Tahun Angkatan</th>
                              <th>Aksi</th>
                           </tr>
                           {query !== "" ? mahasiswas.filter(mahasiswa => mahasiswa.name.toLowerCase().includes(query.toLowerCase())).map((mahasiswa, index) => ( 
                           <tr className="row row-1" key={mahasiswa.id_mahasiswa}>
                              <td>{index + 1 }</td>
                              <td>{mahasiswa.prodi}</td>
                              <td>{mahasiswa.semester}</td>
                              <td>{mahasiswa.kelas}</td>
                              <td>{mahasiswa.tahun_angkatan}</td>
                              <td>
                                 <div className="table-action-content">
                                    <Link to={`/detail-mahasiswa/${mahasiswa.id_mahasiswa}`}><Button model="READ" ><IconEyeCheck  /></Button></Link>
                                    <Link to={`/kelola-data-mahasiswa/edit/${mahasiswa.id_mahasiswa}`}><Button model="EDIT" ><Edit /></Button></Link>
                                    <Button model="DELETE" onClick={() => deleteMahasiswa(mahasiswa.id_mahasiswa)}><Trash /></Button>
                                 </div>
                              </td>
                           </tr>
                           )): mahasiswas.map((mahasiswa, index) => (
                           <tr className="row row-1" key={mahasiswa.id_mahasiswa}>
                              <td>{index + 1 }</td>
                              <td>{mahasiswa.prodi}</td>
                              <td>{mahasiswa.semester}</td>
                              <td>{mahasiswa.kelas}</td>
                              <td>{mahasiswa.tahun_angkatan}</td>
                              <td>
                                 <div className="table-action-content">
                                    <Link to={`/detail-mahasiswa/${mahasiswa.id_mahasiswa}`}><Button model="READ" ><IconEyeCheck  /></Button></Link>
                                    <Link to={`/kelola-data-mahasiswa/edit/${mahasiswa.id_mahasiswa}`}><Button model="EDIT" ><Edit /></Button></Link>
                                    <Button model="DELETE" onClick={() => deleteMahasiswa(mahasiswa.id_mahasiswa)}><Trash /></Button>
                                 </div>
                              </td>
                           </tr>
                           ))}
                        </table>
                        <div className="footer-table">
                           <span className="show-data-children">Menampilkan tabel 1 dari 1 tabel 10 entri</span>
                           <div className="wrapper-next-and-previous-table">
                              <button className="previous-table-children">sebelumnya</button>
                              <span className="value-table-children">1</span>
                              <button className="next-table-children">Selanjutnya</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="display-null"></div>
               </div>
            </div>
         </HOC>
      </>
   )
}

export default KelolaDataMahasiswa;