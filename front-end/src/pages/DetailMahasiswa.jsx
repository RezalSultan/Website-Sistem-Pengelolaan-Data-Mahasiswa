import HOC from "../components/HOC";
import "./styles/kelola_data.css";
import SideBar from "../components/SideBar";
import HeaderDashboard from "../components/HeaderDashboard";
import { Link, useParams} from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";

const DetailMahasiswa = () => {
   const [nama_mahasiswa, setNamaMahasiswa] = useState("setNamaMahasiswa")
   const [prodi, setProdi] = useState("setProdi")
   const [semester, setSemester] = useState("setSemester")
   const [kelas, setKelas] = useState("setKelas")
   const [tahun_angkatan, setTahunAngkatan] = useState("setTahunAngkatan")
   const {idMahasiswa} = useParams()

   

   axios.get(`http://localhost:5000/mahasiswa/${idMahasiswa}`).then(response => { 
      setNamaMahasiswa(response.data.nama[0].nama_mahasiswa)
      setProdi(response.data.data[0].prodi)
      setSemester(response.data.data[0].semester)
      setKelas(response.data.data[0].kelas)
      setTahunAngkatan(response.data.data[0].tahun_angkatan)
   })

	return (
		<>
			<HOC title="Detail Mahasiswa">
				<div className="container">
					<SideBar
						activeSideManagePopulation="active-side-color"
						activeBgManagePopulation="active-side"
					/>
					<div className="container-left">
						<HeaderDashboard title="Kelola Data Mahasiswa" />
						<div className="bg-table-data-children">
							<div className="wrapper-table-data">
								<div className="wrapper-heading-table">
									<Link to="/kelola-data-mahasiswa" className="back">
										Kembali
									</Link>
								</div>
								<div className="wrapper-detail-mahasiswa">
									<h2>Detail Mahasiswa</h2>
									<form className="content-detail-mahasiswa">
										<div className="wrapper-input-section">
											<p>Nama Mahasiswa</p>
											<span>{nama_mahasiswa}</span>
										</div>
										<div className="wrapper-input-section">
											<p>Program Studi Mahasiswa</p>
											<span>{prodi}</span>
										</div>
										<div className="wrapper-input-section">
											<p>Semester Yang Telah Ditempuh Mahasiswa</p>
											<span>{semester}</span>
										</div>
										<div className="wrapper-input-section">
											<p>Kelas Mahasiswa</p>
											<span>{kelas}</span>
										</div>
										<div className="wrapper-input-section">
											<p>Tahun Angkatan Mahasiswa</p>
											<span>{tahun_angkatan}</span>
										</div>
									</form>
                           <Link to={`/kelola-data-mahasiswa/edit/${idMahasiswa}`}><Button model="MD_UPDATE" >Edit</Button></Link>
								</div>
							</div>
						</div>
						<div className="display-null"></div>
					</div>
				</div>
			</HOC>
		</>
	);
};

export default DetailMahasiswa;
