const sizeFitRecommendationService = (req, res) => {
    console.log('in ser', req.body);
    let BAI;
    let fitResponse;
    if (req.body.gender == "man") {
        BAI = (req.body.hip / Math.pow(req.body.height, 1.5)) - 18;
        if (BAI < 21) {
            fitResponse = {
                fit: "slim"
            }
        }
        else if (req.body.chest > req.body.waist && req.body.chest > req.body.hip && req.body.hip > req.body.waist) {
            fitResponse = {
                fit: "muscular"
            }
        }
        else if (BAI <= 33 && BAI > 21) {
            if (req.body.chest >= req.body.waist) {
                fitResponse = {
                    fit: "normal"
                }
            }
            else {
                fitResponse = {
                    fit: "plusSize"
                }
            }
        }
        else if (BAI > 33) {
            fitResponse = {
                fit: "plusSize"
            }
        }
    }
    else if (req.body.gender == "woman") {
        let BWR = req.body.bust / req.body.waist
        let WHR = req.body.waist / req.body.hip

        if (BWR < 0.75 && WHR < 0.80) {
            fitResponse = {
                fit: "slim"
            }
        }
        else if ((BWR < 0.85 && BWR >= 0.75) && (WHR < 0.85 && WHR >= 0.80)) {
            fitResponse = {
                fit: "normal"
            }
        }
        else if (BWR >= 0.85 && WHR >= 0.85) {
            fitResponse = {
                fit: "plusSize"
            }
        }
    }
    return fitResponse;
}

const imageToFitRecommendationService = ()=>{
    
}

const base64toImage = (image) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            const baseURL = reader.result;
            resolve(baseURL);
        };
        reader.onerror = reject;
    })
}

module.exports = { sizeFitRecommendationService,imageToFitRecommendationService }