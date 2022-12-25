import axios from 'axios';
export const dataAll =  async() => {
    try {
        return await axios.get('http://localhost:2001/listData'); 
    } catch (error) {
        console.log(error);
    }
}