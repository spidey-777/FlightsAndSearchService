const { Op } = require('sequelize');
const {City, Airport } = require('../models');

// console.log('City Model:', City);

class CityRepository{
    async createCity(data){
         try {
            const city = await City.create(data);
            //console.log(city);
            return city;
         } catch (error) {
            throw{error};
         }
    }
    async createMultipleCity(cities) { 
        try {
            console.log(cities);
            return await City.bulkCreate(cities);
        } catch (error) {
            throw {error};
        }
    }
    
    async deleteCity( cityId ){
        try {
            await City.destroy({
                where: { id: cityId }

            })
            return true ; 
        } catch (error) {
            throw{error};
        }
    }
    async getCity( cityId ){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            throw {error};
        }
    }
    
    async updateCity(cityId,data){
        try {
            const city = await City.update(data,{
                where: { id: cityId }
            })
            return city;
        } catch (error) {
            throw{error};
        }
    }
    async getAllCity(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where :{
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }

                });
                return cities; 
            }
            const cities =  await City.findAll();
            return cities;
        } catch (error) {
            throw{error};
        }
    }
    async getAirportByCityId( cityId ){
        try {
            const airports = await Airport.findAll({
                where: { cityId: cityId }
            });
            return airports;
        } catch (error) {
            console.error("Error fetching airports:", error);
            throw error;
        }
    }



}

module.exports = CityRepository
