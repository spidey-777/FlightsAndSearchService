const { FlightRepository,AirplaneRepository } = require("../repository/index")
const {  compareTime}  = require('../utils/helper');


class FlightService{
    constructor (){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }    
    async createFlight(data) {
        try {
            if(!(compareTime(data.arrivalTime,data.departureTime))){
                throw{ error :'arrival time can not be less then departure time '}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            throw { error };
        }
    }
    async getFlight(data){
        try {
            const flight = this.flightRepository(data);
            return flight;
        } catch (error) {
            throw { error };
            
        }
    }
    async getAllFlight(data){
        try {
            const flight = await this.flightRepository.getAllFlight(data);
            return flight;
        } catch (error) {
            throw { error };
            
        }
    }
    



}



module.exports = FlightService;
