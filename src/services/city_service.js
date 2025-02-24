const { CityRespository } = require('../respository/index');


class cityService{
    constructor (){
        this.cityRespository = new CityRespository();
    }
    async createCity(data){
        try {
            const city  = await this.cityRespository.createCity(data);
            return city;
            
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async deleteCity(cityId){
        try {
            const response = await this.cityRespository.deleteCity(cityId);
            return response;
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async updateCity(cityId,data){
        try {
            const city  = await this.cityRespository.updateCity(cityId,data);
            return city;
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async getCity(cityId){
        try {
            const city = await this.cityRespository.getCity(cityId);
            return city;
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
}