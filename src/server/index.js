import express from 'express';
import mysql from 'mysql';
import bcrypt from 'bcrypt';
import cors  from 'cors';

const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

db.connect((err) => {
    if(err) {
        console.log('error');
    }
    else {
        console.log('conected');
    }
})

app.post('/register', (req, res)=> {
    const login = req.body.login;
    const password = req.body.password;

        db.query("INSERT INTO users (login, password) VALUES (?, ?)", [login, password],
         (err, result)=>
        {
            console.log(err)
        }
         )
  
})

app.post('/login', (req,res) => {
    const login = req.body.login;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE login = ?", login, 
    (err, result)=>{ if (err)
         {console.log('nie działa')} 
        if (result.length > 0)
        {bcrypt.compare(password, result[0].password, (err, response)=> {
        if(response){
            console.log('dziala');
        }
        else {
            res.send({message: "Wrong password"})
        }
    })} else {res.send({message: "User doesnt exist"})}});
})

app.listen(3001, () => {
    console.log('running port 3001')
})