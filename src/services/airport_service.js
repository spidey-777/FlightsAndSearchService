const { AirportRepository } = require('../repository/index.js');
const  CrudService  = require("./CrudService.js");


class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository); 
    }
}


module.exports = AirportService