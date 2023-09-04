const knex = require('../knex');

class Clothes{
    static async create(user_id, img_url, description, category, type){
       try{
        const query = `INSERT INTO clothes (user_id, img_url, description, category, type )
        VALUES (?,?,?,?,?) RETURNING *`;
        const result = await knex.raw(query,[user_id, img_url, description, category, type])
        return result
        
       }
       catch(error){
        console.log(error)
        return null
       }
    }
    static async delete(id){
        try{
            const query = `DELETE FROM clothes WHERE ID = ?`
             const result = await knex.raw(query,[id]);
             return result
    
           }
           catch(error){
            console.log(error)
            return null
           }
    }   
    static async list(){
        try{
            const query = `SELECT * FROM clothes`
             const {rows: [results]} = await knex.raw(query)
            return results
           }
           catch(error){
            console.log(error)
            return null
           }
    }  
    
    static async update(id, img_url,description, category, type){
        try{
            
        const query = `SET img_url = ?, description = ?, category = ?, type = ? WHERE ID =?`
        const result = await knex.raw(query, [img_url,description, category, type, id])
         return result           }
           catch(error){
            console.log(error)
            return null
           }
    }  
  
}
module.exports = Clothes;
