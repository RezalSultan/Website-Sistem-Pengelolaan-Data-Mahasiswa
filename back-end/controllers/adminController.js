const admin = require("../models/adminModels")

const getAdmin = async (req, res) => {
   try {
      const data = await admin.getAdmin()
      res.json({
         message: "data berhasil ditampilkan",
         data : data
      })
   } catch (error) {
      console.log(error)
   }
}

const loginAdmin = async (req, res) => {
   try {
      const data = await admin.getAdmin()

      const {body} = req
      await admin.getLoginAdmin(body)

      const userNameInput = req.body.username
      const passInput = req.body.password

      if(passInput !== data[0].password && userNameInput !== data[0].username) return res.json({
         message: "gagal login, coba untuk input ulang!"
      })
      
      if(userNameInput !== data[0].username) return res.json({
         message: "gagal login, username anda salah!"
      })

      if(passInput !== data[0].password) return res.json({
         message: "gagal login, password anda salah!"
      }) 

      res.json({
         message: "anda berhasil login",
      })
   } catch (error) {
      console.log(error)
      res.json({
         message: "gagal login, coba untuk input ulang!"
      })
   }
}



module.exports = {
   getAdmin,
   loginAdmin 
}