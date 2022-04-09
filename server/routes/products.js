const express = require('express')
const searchDoc = require('../controllers/product')
const router = express.Router()
router.get('/search',async (req,res,next)=> {
  const body = {
    query: {
        match_phrase_prefix: {
            "name": req.query.name
        }
    }
}
try {
    const resp = await searchDoc('products', body);
  res.json(resp.hits.hits.map(ele=> ele._source))

} catch (e) {
    console.log(e);
}
})
module.exports = router