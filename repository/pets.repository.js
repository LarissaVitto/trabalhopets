const con = require("../mysql-connection");
module.exports = {
    find: () => {
        return con.select().from("pets");
    },
}