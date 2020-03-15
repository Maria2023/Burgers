
const connection = require("./connection");
const util = require("util");

connection.query = util.promisify(connection.query);

class ORM {
    constructor() {

      }

    async selectAll(table, conditionField, conditionValue){
        
        let result= await connection.query(`SELECT * FROM ${table} WHERE ${conditionField} = ${conditionValue};`);
        
        return result;
    }

    async insertOne(table, fields, values){
        await connection.query(`INSERT INTO ${table} (${fields}) values (${values});`);
        return true;
    }

    async updateOne(table, field, value, conditionField, conditionValue){
        await connection.query(`UPDATE ${table} SET ${field} = ${value} WHERE ${conditionField} = ${conditionValue};`);
        return true;
        
    }

}

module.exports = ORM;


