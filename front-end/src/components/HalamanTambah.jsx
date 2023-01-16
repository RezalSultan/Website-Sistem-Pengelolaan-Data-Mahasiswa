import "../pages/styles/kelola_data.css";
import HOC from "./HOC";
import SideBar from "./SideBar";
import HeaderDashboard from "./HeaderDashboard";
import { Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import { useState} from "react";
import { useNavigate} from "react-router-dom";

const HalamanTambah = () => {
   const [nama_mahasiswa, setNamaMahasiswa] = useState("")
   const [prodi, setProdi] = useState("")
   const [semester, setSemester] = useState("")
   const [kelas, setKelas] = useState("")
   const [tahun_angkatan, setTahunAngkatan] = useState("")
   const navigate = useNavigate()

   const TambahMahasiswa = async (e) => {
      e.preventDefault()
      try {
         await axios.post("http://localhost:5000/mahasiswa", {
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
			<HOC title="Tambah Mahasiswa">
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
								<div className="wrapper-tambah-mahasiswa">
									<h2>Tambah Data Mahasiswa</h2>
									<form
										onSubmit={TambahMahasiswa}
										className="form-tambah-mahasiswa"
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
										<Button model="MD_TAMBAH" type="Submit">
											Tambah
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

export default HalamanTambah;
