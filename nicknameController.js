const express = require ('express');
const router = express.Router();
const { fetch_api } = require('../models/nicknameModel');

router.post('/generate-nickname', async (req, res) => {
    const inputString = req.body.inputString;
    const result = await fetch_api(inputString);

    const nicknames = result.parts[0].text.split('\n').filter(nickname => nickname.trim() !== '');

    res.render('nicknames', { nicknames });
}); 


module.exports = router;