const db = require('../db');

// get echo by id
exports.dbReady = async function (request, response) { 
    console.log('/dbReady called');
    
    const text = 'SELECT NOW()'
    const values = '';

    db
    .query(text, values)
    .then(result => {
        console.log(result.rows[0])
        response.send(result.rows[0]);
    })
    .catch(e => console.error(e.stack))
}

