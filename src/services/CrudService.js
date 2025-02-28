
class CrudService{
    constructor(repository){
        this.repository = repository;
    }
    async create(data){
        try {
            
            const result  = await this.repository.create(data);
            return result;
            
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }

    }
    async distroy(modelId){
        try {
            
            const result  = await this.repository.create(modelId);
            return result;
            
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async get(modelId){
        try {
            
            const result  = await this.repository.get(modelId);
            return result;
            
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async getAll(filter){
        try {
            
            const result  = await this.repository.getAll(filter);
            return result;
            
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }
    async update(modelId,data){
        try {
            
            const result  = await this.repository.update(modelId,data);
            return result;
            
        } catch (error) {
           console.log("something went wrong ") ;
           throw{error};
        }
    }

}

module.exports = CrudService;
