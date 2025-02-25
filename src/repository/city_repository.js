const {City} = require('../models');

console.log('City Model:', City);

class CityRepository{
    async createCity(data){
         try {
            const city = await City.create(data);
            console.log(city);
            return city;
         } catch (error) {
            throw{error};
         }
    }
    async deleteCity( cityId ){

        try {
            await City.destroy({
                where : cityId

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
                where: cityId
            })
            return city;
        } catch (error) {
            throw{error};
        }
    }



}

module.exports = CityRepository
