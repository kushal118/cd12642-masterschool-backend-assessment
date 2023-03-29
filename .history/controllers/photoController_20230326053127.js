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

  export getPhotos = async (req,res)=>{
    
  }