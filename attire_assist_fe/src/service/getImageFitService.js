import Axios from 'axios';

export const getImageFitService = async(baseUrl) => {
    var requestBody = {
        url: baseUrl
    }

    const response = await Axios.request({
        url: "http://localhost:3000/glam/fitForImage",
        data: requestBody,
        method: "POST",
        headers:{ "Access-Control-Allow-Origin": "*"}
    })

    return response.data;
}