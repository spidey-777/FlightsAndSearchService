const {CityService} = require('../services/index.js');

const cityService  = new CityService();


const create = async (req,res) =>{
    
    try {
        let cities;
        if(Array.isArray(req.body)){
         //   console.log(req.body);
            cities = await cityService.createMultipleCity(req.body);
        }else{
        cities = await cityService.createCity(req.body);
        }
        return res.status(201).json({ 
            data : cities,
            success : true,
            message : 'Successfully created city ',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            err : error
            
        })
    }
}
const destroy = async(req,res) =>{
    try {
        //console.log(req.params.id)
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted  city ',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            err : error
            
        })
    }
}
const update = async(req,res) =>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully updated the city ',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            err : error
            
        })
    }
}
const get = async(req,res) =>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fatched  city ',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            err : error
            
        })
    }
}
const getAll = async(req,res)=>{
    try {
       // console.log(req.query);
        const response = await cityService.getAllCity(req.query);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fatched  city ',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            err : error
        })
    }
}
const getAirport= async(req,res) =>{
    try {
        const response = await cityService.getAirportByCityId(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fatched  city ',
            err : {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data :{},
            success : false,
            err : error
            
        })
    }
}


module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    getAirport
}