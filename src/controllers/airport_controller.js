const {AirportService} = require('../services/index.js');

const airportService  = new AirportService();


const create = async (req,res) =>{
    
    try {
        let airports;
        if(Array.isArray(req.body)){
         //   console.log(req.body);
            airports = await airportService.createMultipleAirport(req.body);
        }else{
        airports = await airportService.create(req.body);
        }
        return res.status(201).json({ 
            data : airports,
            success : true,
            message : 'Successfully created airport ',
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
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully deleted  airport ',
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
        const response = await airportService.update(req.params.id,req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully updated the airport ',
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
        const response = await airportService.get(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fatched  airport ',
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
        const response = await airportService.getAll (req.query);
        return res.status(200).json({
            data : response,
            success : true,
            message : 'Successfully fatched  airport ',
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
    getAll
}