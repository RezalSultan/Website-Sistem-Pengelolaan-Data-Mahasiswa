import "../pages/styles/kelola_data.css";
import HOC from "./HOC";
import SideBar from "./SideBar";
import HeaderDashboard from "./HeaderDashboard";
import { Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";

const HalamanEdit = () => {
   const [nama_mahasiswa, setNamaMahasiswa] = useState("setNamaMahasiswa")
   const [prodi, setProdi] = useState("setProdi")
   const [semester, setSemester] = useState("setSemester")
   const [kelas, setKelas] = useState("setKelas")
   const [tahun_angkatan, setTahunAngkatan] = useState("setTahunAngkatan")
   const navigate = useNavigate()
   const {idMahasiswa} = useParams()

   useEffect(() => {
      const getMahasiswaById = async () =>{
         const response = await axios.get(`http://localhost:5000/mahasiswa/${idMahasiswa}`)
         setNamaMahasiswa(response.data.nama[0].nama_mahasiswa)
         setProdi(response.data.data[0].prodi)
         setSemester(response.data.data[0].semester)
         setKelas(response.data.data[0].kelas)
         setTahunAngkatan(response.data.data[0].tahun_angkatan)
      }
      getMahasiswaById()
   }, [idMahasiswa])

   const updateMahasiswa = async (e) => {
      e.preventDefault()
      try {
         await axios.patch(`http://localhost:5000/mahasiswa/${idMahasiswa}`, {
            nama_mahasiswa,
            prodi,
            semester,
            kelas,
            tahun_angkatan
         })
         navigate("/kelola-data-mahasiswa")
      } catch (error) {
         console.log(error)
      }
   }

	return (
		<>
			<HOC title="Edit Mahasiswa">
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
								<div className="wrapper-edit-mahasiswa">
									<h2>Edit Data Mahasiswa</h2>
									<form
										onSubmit={updateMahasiswa}
										className="form-edit-mahasiswa"
									>
										<input
											placeholder="Nama Mahasiswa"
											value={nama_mahasiswa}
											onChange={(e) =>
												setNamaMahasiswa(e.target.value)
											}
										/>
										<input
											placeholder="Program Studi"
											value={prodi}
											onChange={(e) => setProdi(e.target.value)}
										/>
										<input
											placeholder="Semester"
											value={semester}
											onChange={(e) => setSemester(e.target.value)}
										/>
										<input
											placeholder="Kelas"
											value={kelas}
											onChange={(e) => setKelas(e.target.value)}
										/>
										<input
											placeholder="Tahun Angkatan"
											value={tahun_angkatan}
											onChange={(e) =>
												setTahunAngkatan(e.target.value)
											}
										/>
										<Button model="MD_UPDATE" type="Submit">
											Update
										</Button>
									</form>
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

export default HalamanEdit;
