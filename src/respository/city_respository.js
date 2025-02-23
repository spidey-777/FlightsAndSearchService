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
    async deleteCity( cityid){

        try {
            await City.destroy({
                where : cityid

            })
        } catch (error) {
            throw{error};
        }
    }



}