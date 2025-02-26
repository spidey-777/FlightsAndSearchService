const { Op } = require('sequelize');
const {Airport} = require('../models');

// console.log('Airport Model:', Airport);

class AirportRepository{
    async createAirport(data){
         try {
            const airport = await Airport.create(data);
            //console.log(airport);
            return airport;
         } catch (error) {
            throw{error};
         }
    }
    async createMultipleAirport(airports) { 
        try {
            console.log(airports);
            return await Airport.bulkCreate(airports);
        } catch (error) {
            throw error;
        }
    }
    
    async deleteAirport( airportId ){
        try {
            await Airport.destroy({
                where: { id: airportId }

            })
            return true ; 
        } catch (error) {
            throw{error};
        }
    }
    async getAirport( airportId ){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            throw {error};
        }
    }
    async updateAirport(airportId,data){
        try {
            const airport = await Airport.update(data,{
                where: { id: airportId }
            })
            return airport;
        } catch (error) {
            throw{error};
        }
    }
    async getAllAirport(filter){
        try {
            if(filter.name){
                const airports = await Airport.findAll({
                    where :{
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }

                });
                return airports; 
            }
            const airports =  await Airport.findAll();
            return airports;
        } catch (error) {
            throw{error};
        }
    }



}

module.exports = AirportRepository
