const mahasiswa = require("../models/mahasiswaModels")
const admin = require("../models/adminModels")

const getMahasiswa = async (req, res) => {
   try {
      const dataMahasiswa = await mahasiswa.getAllMahasiswa()

      res.json({
         message : "Tampil Data Berhasil",
         data : dataMahasiswa
      })
   } catch (error) {
      console.log(error)
   }
}

const getMahasiswaById = async (req, res) => {
   try {
      const {idMahasiswa} = req.params

      const dataMahasiswa = await mahasiswa.getMahasiswa(idMahasiswa)
      const namaMahasiswa = await mahasiswa.getNameMahasiswa(idMahasiswa)

      res.status(200).json({
         message : "Tampil Data Berhasil",
         data : dataMahasiswa,
         nama: namaMahasiswa
      })
   } catch (error) {
      console.log(error)
   }
}

const createMahasiswa = async (req, res) => {
   try {
      const getIdAdmin = await admin.getAdmin()
      const idAdmin = getIdAdmin[0].id_admin

      const {body} = req 
      const dataMahasiswa = await mahasiswa.createMahasiswa(body, idAdmin)

      const idMahasiswa = dataMahasiswa.insertId

      await mahasiswa.createNamaMahasiswa(body, idMahasiswa)

      res.status(201).json({
         message : "Berhasil menambah data mahasiswa baru"
      })

   } catch (error) {
      console.log("create" + error)
   }
}

const updateMahasiswa = async (req, res) => {
   try {
      const {body} = req
      const {idMahasiswa} = req.params
      await mahasiswa.updateMahasiswa(body, idMahasiswa)

      await mahasiswa.updateNamaMahasiswa(body, idMahasiswa)

      res.status(201).json({
         message : "Berhasil mengupdate data mahasiswa"
      })
   } catch (error) {
      console.log("create" + error)
   }
}

const deleteMahasiswa = async (req, res) => {
   try {
      const {idMahasiswa} = req.params
      await mahasiswa.deleteMahasiswa( idMahasiswa)

      await mahasiswa.deleteNamaMahasiswa(idMahasiswa)

      res.status(201).json({
         message : "Berhasil menghapus data mahasiswa"
      })
   } catch (error) {
      console.log("create" + error)
   }
}

const searchMahasiswa = async(req, res) => {
   try {
      const {search} = req.query.search;
      const dataSearch = await mahasiswa.searchMahasiswa(search)
      res.json( {
         data: dataSearch
      })
   } catch (error) {
      console.log(error)
   }
}


module.exports = {
   getMahasiswa,
   createMahasiswa,
   updateMahasiswa,
   deleteMahasiswa,
   getMahasiswaById,
   searchMahasiswa
}