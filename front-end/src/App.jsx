import { Routes, Route } from "react-router-dom";
import Masuk from "./pages/Masuk";
import KelolaDataMahasiswa from "./pages/KelolaDataMahasiswa";
import DetailMahasiswa from "./pages/DetailMahasiswa";
import HalamanEdit from "./components/HalamanEdit";
import HalamanTambah from "./components/HalamanTambah";

function App() {
   return (
      <>
         <Routes>
            <Route path="/kelola-data-mahasiswa" element={<KelolaDataMahasiswa />} />
            <Route path="/kelola-data-mahasiswa/edit/:idMahasiswa" element={<HalamanEdit />} />
            <Route path="/kelola-data-mahasiswa/tambah" element={<HalamanTambah />} />
            <Route path="/detail-mahasiswa/:idMahasiswa" element={<DetailMahasiswa />} />
            <Route exact path="/" element={<Masuk />} />
         </Routes>
      </>
	);
}

export default App
