import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

//  Get Photos
// Route GET /api/photos/
export const getPhotos = async (req, res) => {
  try {
    const response = await getData("/photos");
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    errorsHandlers(error, res);
  }
};
// Get Photo
// route GET /api/photos/:id

export const getPhotoById = async(req,res)=>{
  const {id} = req.params;
try {
  const response = await getData(`/photos/${id}`);
  res.status(200).json(response.data)

} catch (error) {
  errorsHandlers(error,res);
  console.log((error));
}
}

export const getUserPhotos= async(req,res)=>{
  const {username}=req.params;
  try {
    const response= await getData(`/users/${username}/photos`)
    const data = response.data.map((object)=>{
      const {
        id,
        user:{username},
        urls:{raw},
        description,
      }=object
      return{
        id,
        username,
      }
    })
    
  } catch (error) {
    
  }
}



// Get Data Helper
const getData = (url) => {
  return axios({
    method: "get",
    url,
    baseURL: "https://api.unsplash.com/",
    headers: {
      Authorization:`Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });
};

// Error handler helper
const errorsHandlers = (error, res) => {
  const status = error.response?.status ?? 500;

  status === 404
    ? res.status(status).json({ message: "Not Found." })
    : status === 500
    ? res.status(status).json({
        message: "Server error. Please try again later.",
      })
    : res.status(status).json({ message: error.message });
};