const dbConn = require('../db');


const Login = async(req, res, next) =>{
    
    try{
        let sql = 'SELECT * FROM user WHERE emailId = ? AND password = ?';
        const user = dbConn.query(sql, [req.body.username, req.body.password], async (err, rows) => {
            if (err) {
                throw err;
            }
            res.json({data:rows[0], status:"success", code:200});
        })
        
    }catch(err){
        res.status(500).json({error:err.message})
    }  
};


module.exports = {Login}