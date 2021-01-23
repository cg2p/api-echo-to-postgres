const db = require('../db');

// get echo by id
exports.getEcho = async function (request, response) { 
    const { id } = request.params;
    console.log('/getEcho called with id ', id);
    
    const text = 'SELECT * FROM sample.echo WHERE id = $1;';
    const values = [id];

    db
    .query(text, values)
    .then(result => {
        console.log(result.rows[0])
        response.send(result.rows[0]);
    })
    .catch(e => console.error(e.stack))
}

// post echo of inputText into db
exports.echo = async function (request, response) { 
    const { inputText } = request.body;
    console.log('/echo called inputText ', inputText);
    
    const text = 'INSERT INTO sample.echo(echo, reversed) VALUES($1, FALSE) RETURNING *;';
    const value = [inputText];

    db
    .query(text, value)
    .then(result => {
        console.log(result.rows[0]);
        response.json({ id: result.rows[0].id, echo: result.rows[0].echo, reversed: result.rows[0].reversed });
    })
    .catch(e => console.error(e.stack))
}


// post reverse of inputText into db
exports.reverse = async function (request, response) {
    const { inputText } = request.body;
    console.log('/reverse called inputText ', inputText);
    
    const text = 'INSERT INTO sample.echo(echo, reversed) VALUES($1, TRUE) RETURNING *;';
    const value = [inputText.split("").reverse().join("")];

    db
    .query(text, value)
    .then(result => {
        console.log(result.rows[0]);
        response.json({ id: result.rows[0].id, echo: result.rows[0].echo, reversed: result.rows[0].reversed });
    })
    .catch(e => console.error(e.stack))  
}
