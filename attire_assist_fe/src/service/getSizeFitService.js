import Axios from 'axios';

export const getSizeFitService = async(data) => {
    const response = await Axios.request({
        url: "http://localhost:3000/glam/fit",
        data: data,
        method: "POST",
        headers:{ "Access-Control-Allow-Origin": "*"}
    })

    return response.data;
}