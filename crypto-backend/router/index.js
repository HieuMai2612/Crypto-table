const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
    let response = null;
    new Promise(async (resolve, reject) => {
        try {
            response = await axios.get(
                "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20",
                {
                    headers: {
                        "X-CMC_PRO_API_KEY": "fecff2e3-f463-47e6-b783-10c0932142ba",
                    },
                }
            );
        } catch (ex) {
            response = null;
            // error
            console.log(ex);
            reject(ex);
        }
        if (response) {
            // success
            const json = response.data;
            res.json(json);
            resolve(json);
        }
    });
});

module.exports = router;