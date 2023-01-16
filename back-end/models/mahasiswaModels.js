const {query} = require("../config/query");

const getAllMahasiswa = async () => {
   try {
      const sql = await query(`SELECT id_mahasiswa, prodi, semester, kelas, tahun_angkatan from mahasiswa`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const getMahasiswa = async (idMahasiswa) => {
   try {
      const sql = await query(`SELECT id_mahasiswa, prodi, semester, kelas, tahun_angkatan from mahasiswa WHERE id_mahasiswa=${idMahasiswa}`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const getNameMahasiswa = async (idMahasiswa) => {
   try {
      const sql = await query(`SELECT nama_mahasiswa from detail_mahasiswa WHERE id_mahasiswa=${idMahasiswa}`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const createMahasiswa = async (body, idAdmin) => {
   try {
      const sql = await query(`INSERT INTO mahasiswa (prodi, semester, kelas, tahun_angkatan, id_admin) VALUES ("${body.prodi}", ${body.semester}, "${body.kelas}", ${body.tahun_angkatan}, ${idAdmin});`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const createNamaMahasiswa = async (body, idMahasiswa) => {
   try {
      const sql = await query(`INSERT INTO detail_mahasiswa (id_mahasiswa, nama_mahasiswa) VALUES (${idMahasiswa}, "${body.nama_mahasiswa}");`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const updateMahasiswa = async (body, idMahasiswa) => {
   try {
      const sql = await query(`UPDATE mahasiswa SET prodi="${body.prodi}", semester=${body.semester}, kelas="${body.kelas}", tahun_angkatan=${body.tahun_angkatan} WHERE id_mahasiswa=${idMahasiswa}`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const updateNamaMahasiswa = async (body, idMahasiswa) => {
   try {
      const sql = await query(`UPDATE detail_mahasiswa SET nama_mahasiswa="${body.nama_mahasiswa}" WHERE id_mahasiswa=${idMahasiswa}`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const deleteMahasiswa = async (idMahasiswa) => {
   try {
      const sql = await query(`DELETE FROM mahasiswa WHERE id_mahasiswa=${idMahasiswa}`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const deleteNamaMahasiswa = async (idMahasiswa) => {
   try {
      const sql = await query(`DELETE FROM detail_mahasiswa WHERE id_mahasiswa=${idMahasiswa}`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const searchMahasiswa = async (search) => {
   try {
      const sql = await query(`SELECT * FROM mahasiswa WHERE tahun_angkatan LIKE '%${search}%' OR prodi LIKE '%${search}%'`) 

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

module.exports = {
   getAllMahasiswa,
   getNameMahasiswa,
   createMahasiswa,
   createNamaMahasiswa,
   updateMahasiswa,
   updateNamaMahasiswa,
   deleteMahasiswa,
   deleteNamaMahasiswa,
   getMahasiswa,
   searchMahasiswa
};