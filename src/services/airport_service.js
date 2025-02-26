const { AirportRepository } = require('../repository/index.js');


class AirportService{
    constructor (){
        this.airportRepository = new AirportRepository();
    }
    async createAirport(data){
        try {
            
            const airport  = await this.airportRepository.createAirport(data);
            return airport;
            
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async createMultipleAirport(data){
        try {
            //console.log(data);
           // console.log("jai hoo");
            const airport  = await this.airportRepository.createMultipleAirport(data);
            return airport;
            
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async deleteAirport(cityId){
        try {
            const response = await this.airportRepository.deleteAirport(cityId);
            return response;
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async updateAirport(cityId,data){
        try {
            const airport  = await this.airportRepository.updateAirport(cityId,data);
            return airport;
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async getAirport(cityId){
        try {
            const airport = await this.airportRepository.getAirport(cityId);
            return airport;
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async getAllAirport(filter){
        try {
            const a = {name : filter.name};
           // console.log(a);
            const airports = await this.airportRepository.getAllAirport({name : filter.name});
            return airports;
        } catch (error) {
            console.log("something went wrong ") ;
            throw{error};
        }
    }
}

module.exports = AirportService