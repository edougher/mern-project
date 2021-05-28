import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'
/*
aaronwakeup
Helloworld@sd86  
*/
const app = express()
dotenv.config()

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


app.use('/user', userRoutes)
app.use('/posts', postRoutes)
app.get('/', (req, res) => {
    res.send('Hello Memeories API')
})

const PORT = process.env.PORT || 5000;

// needs to be in .env file, but when deploying to Heroku it failed and said 'CONNECTION_URL' needed to be a string 
// and not a .env const?

const CONNECTION_URL = 'mongodb+srv://aaronwakeup:Helloworld@sd86@cluster0.rbpc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// process.env.CONNECTION_URL not working
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)