const express =  require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const city = require('./models/city');
const { Airport, City } = require('./models/index');  
const db= require('./models/index');  



const setupAndStartServer = async () =>{

    //create server and start server
    const app = express();



    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use('/api',ApiRoutes);
     


    app.listen(PORT, async()=>{
        console.log(`server started at ${PORT}`);
        if(process.env.db_sync){
         db.sequelize.sync({alter: true});
        }
        // const city = await City.findOne({
        //     where: {
        //         id: 20
        //     }
        // });
        // const airports = await city.getAirports();
        // console.log(airports);
        
        
       

    } )


}
setupAndStartServer();
