//Require axios to make API calls
const axios = require("axios");
const getData = (url) => {
    return axios({
      method: "get",
      url,
      baseURL: "https://api.unsplash.com/",
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });
  };

  export const getPhotos = async (req,res)=>{
try {
    const response = await getData("/photos");
    res.status(200).json(res)
} catch (error) {
    
}
  }