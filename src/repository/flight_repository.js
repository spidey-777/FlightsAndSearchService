const {Flights} = require('../models/');
const { Op } = require('sequelize');

  

class FlightRepository{
    #createFilter(data){
        let filter ={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId
        }
        let priceFilter = [];
        if (data.maxPrice) {
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
        }
        if (data.minPrice) {
            priceFilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (priceFilter.length > 0) {
            filter[Op.and] = priceFilter;
        }
       
        return filter;
    }

    async createFlight(data){
        try {
           // console.log(data);
            const flight = await Flights.create(data);
           // console.log(flight);
             return flight;
            
        } catch (error) {
            throw {error};
        }
    }


    async updateFlight(data){
        try {
            const flight = await flights.create(data);
             return flight;
            
        } catch (error) {
            throw {error};
        }
    }
    async deleteFlight(data){
        try {
            const flight = await flights.create(data);
             return flight;
            
        } catch (error) {
            throw {error};
        }
    }
    async getFlight(flightId){
        try {
            const flight = await flights.findByPk(flightId);
            return flight;
            
        } catch (error) {
            throw {error};
        }
    }
    async getAllFlight(filter) {
        try {
          //  console.log(filter);
            const filterObj = this.#createFilter(filter); 
            const flights = await Flights.findAll({
                where: filterObj
            });
            return flights;
        } catch (error) {
            throw { error };
        }
    }
    
}







module.exports = FlightRepository;