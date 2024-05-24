const express = require('express');
const router = express.Router();
const {fitRecommendationWithSize,fitRecommendationWithImage} = require('../controllers/fitController')

router.post("/fit",fitRecommendationWithSize);
router.post("/fitForImage",fitRecommendationWithImage);

module.exports = router;