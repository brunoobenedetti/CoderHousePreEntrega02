import { Router } from "express";

import UserManager from "../../dao/UserManager.js";
import { isValidPassword, tokenGenerator } from "../../helpers/utils.js";

const router = Router()

router.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World 🎃</h1>')
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // console.log('entrando a login')
    const user = await UserManager.getByMail(email);
    if (!user) {
        return res.status(401).json({ message: "Correo o clave invalidos" })
    }
    const isPassValid = isValidPassword(password, user);
    if (!isPassValid) {
        return res.status(401).json({ message: "Correo o clave invalidos" })
    }

    const token = tokenGenerator(user)
    res.status(200).json({ access_token: token });

})


export default router