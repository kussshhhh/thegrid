const express = require('express') ;
const bcrypt  = require('bcrypt')  ;
const jwt = require('jsonwebtoken') ;
const db = require('./db') ;
const cors = require('cors')

const app = express() ;
app.use(cors()) ;
const port = 3000 ; 

app.use(express.json()) ;


// middleware to verify jwt tokens
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'] ;
    const token = authHeader && authHeader.split(' ')[1] ;

    if(token == null) return res.sendStatus(401) ;

    jwt.verify(token, 'your_secret_key', (err, user) => {
        if(err) return res.sendStatus(403) ;
        req.user = user ;
        next() ;
        });
}

// routes
app.post('/register', async(req, res) =>{
    try {
        const { username, password} = req.body ;
        const hash = await bcrypt.hash(password, 10) ;
        await db.createUser(username, hash) ;
        res.status(201).json({message: 'User registered succesfully'}) ;
    } catch(err){
        res.status(500).json({error: err.message}) ;
    }
}) ;

app.post('/login', async(res, sync) => {
    try {
        const { username, password } = req.body ;
        const user = await db.getUser(username) ;
        if(!user) return res.status(400).json({error: 'User not found'}) ;

        const match = await bcrypt.compare(password, user.password) ;
        if(!match) return res.status(400).json({error: 'Invalid password'}) ;
        
        const token = jwt.sign({id : user.id, username: user.username}, 'your_secret_key', {expires: '1h'}) ;
        
        res.json({token}) ;
    } catch (err) {
        res.status(500).json({error: err.message}) ;
    }
})

app.get('/components', async (req, res) => {
    try {
        const components = await db.getAllComponents() ;
        res.json(components) ;
    } catch (err){
        res.status(500).json({error: err.message}) ;
    }
})

app.post('/components', authenticateToken, async(req, res) => {
    try {
        const componentId = await db.createComponent(req.body) ;
        res.status(201).json({id: componentId} ) ;

    } catch (err){
        res.status(400).json({error: err.message}) ;
    }
})

app.listen(port, () => {
    console.log(`Server runnign at http://localhost:${port}`) ;
})