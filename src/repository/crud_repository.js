const { Op } = require('sequelize');



class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {
            console.error("Something went wrong in CRUD Repository:", error);
            throw error;
        }
    }

    async destroy(id){
        try {
            return await this.model.destroy({ where: { id } });
        } catch (error) {
            console.error("Something went wrong in CRUD Repository:", error);
            throw error;
        }
    }

    async get(id) {
        try {
            return await this.model.findByPk(id);
        } catch (error) {
            console.error("Something went wrong in CRUD Repository:", error);
            throw error;
        }
    }

    async getAll(filter) {
        try {
            if (filter.name) {
                return await this.model.findAll({
                    where: { name: { [Op.startsWith]: filter.name } }
                });
            }
            return await this.model.findAll();
        } catch (error) {
            console.error("Something went wrong in CRUD Repository:", error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            await this.model.update(data, { where: { id } });
            return await this.model.findByPk(id); 
        } catch (error) {
            console.error("Something went wrong in CRUD Repository:", error);
            throw error;
        }
    }
}

module.exports = CrudRepository;
