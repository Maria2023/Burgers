// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

const ORM = require("../config/orm");

class Burger {
    constructor(){
        this.orm = new ORM();
    }

    async getAllBurgers(){
        let allBurgers = await this.orm.selectAll('burgers','devoured','0');
        //console.log(allBurgers);
        return allBurgers;
    }

    async getAllDevoured(){
        let allBurgers = await this.orm.selectAll('burgers','devoured','1');
        //console.log(allBurgers);
        return allBurgers;
    }

    addBurger(name){
        this.orm.insertOne('burgers',`burger_name, devoured`,`'${name}', 0`);
    }

    devourBurger(id){
        this.orm.updateOne('burgers','devoured','1','id',id);
    }

    deleteBurger(){
        //won't be used
    }
}

module.exports = Burger;