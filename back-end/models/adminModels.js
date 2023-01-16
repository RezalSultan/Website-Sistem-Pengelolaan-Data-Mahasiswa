const {query} = require("../config/query");

const getAdmin = async () => {
   try {
      const sql = await query(`SELECT * FROM admin`)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

const getLoginAdmin = async (body) => {
   try {
      const sql = await query(`SELECT  * FROM admin WHERE username="${body.username}" AND password="${body.password}" `)

      return sql;
   } catch (error) {
      console.log("model" + error);
   }
}

module.exports = {
   getAdmin,
   getLoginAdmin
};
