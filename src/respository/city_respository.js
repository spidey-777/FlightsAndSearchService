const {City} = require('../models/index');


class CityRespository{
    async createCity({ name }){
         try {
            const city = await City.create({ name });
            return city;
         } catch (error) {
            throw{error};
         }
    }
    async deleteCity( cityid ){

        try {
            await City.destroy({
                where : cityid

            })
            return true ; 
        } catch (error) {
            throw{error};
        }
    }
    async getCity( cityid ){
        try {
            const city = await City.findByPk(cityid);
            return city;
        } catch (error) {
            throw {error};
        }
    }
    async updateCity(cityid,data){
        try {
            const city = await City.update(data,{
                where: cityid
            })
            return city;
        } catch (error) {
            throw{error};
        }
    }



}