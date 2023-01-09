import axios from 'axios';

const URL = 'http://localhost:8000';


export const createPost = async (post) => {
    try{
        return await axios.post(`${URL}/create`,post);
    } catch(error){
        console.log('Error while calling createPost API',error);
    }
}

export const getAllPost = async (params) =>{
    try{
         let response = await axios.get(`${URL}/posts${params}`);
         return response.data;
    } catch(error){
        console.log('Error while getAllPost Api ', error);
    }
}

export const getPost  = async (id) => {
    try{
         let response =   await axios.get(`${URL}/post/${id}`);
         return response.data;
    } catch(error){
        console.log('Error while calling getPost API',error);
    }
}

export const updatePost = async (id, post) =>{
    try{
        let response = await axios.post(`${URL}/update/${id}`, post);
        return response.data;
    } catch(error){
        console.log('Error while calling updatePost API', error);
    }
}

export const deletePost = async (id) => {
    try{
         await axios.delete(`${URL}/delete/${id}`);
    } catch(error){
        console.log('Error while calling deletePost API',error);
    }
}

export const uploadFile = async (data) => {
    try{
        return await axios.post(`${URL}/file/upload`, data);
    } catch(error){
        console.log('Error while calling uploadFile API',error);
    }
}