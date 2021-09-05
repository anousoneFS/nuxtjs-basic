const express = require('express')
const cors = require('cors')

const mockToken = '48cc2df8af793a05596c111e86592fbcfb13be12c44bb35b'
const mockUser = {
    id: 1,
    name: 'anousone',
    email: 'anousone@gmail.com'
}

const app = express()

app.use(cors())
app.use(express.json())

const router = express.Router()

router.get('/me', (req, res) => {
    const headers = req.headers.authorization;
    const token = headers && headers.split(' ')[1]
    if (token === mockToken){
        return res.json({
            user: mockUser
        });
    }else{
        return res.status(401).json({message: 'Invalide token'})
    }
})

router.post('/login', (req, res) => {
    const {email, password} = req.body

    if(email === 'admin@admin.com' && password === ']tsafzjko'){
        return res.json({
            user: mockUser,
            token: mockToken
        })
    }else{
        return res.status(401).json({
            message: 'Invalide password',
        })
    }
})

app.use('/api', router)

app.listen(12345, ()=>{console.log('Runing at port 12345')})