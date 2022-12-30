import axios from 'axios';
export const dataAll =  async() => {
    try {
        return await axios.get(process.env.API_BACK_END); 
    } catch (error) {
        console.log(error);
    }
}