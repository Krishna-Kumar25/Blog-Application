import {Box,FormControl,InputBase,makeStyles,Button, TextareaAutosize} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { createPost, uploadFile } from '../Service/Api.js';
import { useHistory }  from 'react-router-dom';
import axios from 'axios';


const useStyle = makeStyles((theme) => ({
    container: {
      padding: "0 100px",
      [theme.breakpoints.down("md")]: {
        padding: "0",
      },
    },
    image: {
      width: "100%",
      height: "50vh",
      objectFit: "cover",
    },
    title:{
        display: 'flex',
        flexDirection: 'row',
    },
    textfield:{
       flex: 1,
       fontSize: '25px',
       margin: '0px 20px'
    },
    textarea:{
        width:'100%',
        marginTop: '50px',
        border: 'none',
        fontSize: '20px',
        '&:focus-visible':{
            outline:'none'
        }
    }
}));

const intialValues = {
  title: '',
  description: '',
  picture: '',
  username: 'Krishna',
  categories: 'All',
  createdate:new Date()
}


const CreateView = () =>{
    const classes = useStyle();
    
    const [post,setPost] = useState(intialValues);
    const [file,setFile] = useState('');
    const [image,setImage] = useState('');
    const history = useHistory();

    // const url = post.picture? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    useEffect(()=>{
      const getImage = async () =>{
           if(file){
             const data = new FormData();
             data.append("name",file.name);
             data.append("file",file);
             data.append("upload_preset","kcbcilsb");

            //  axios.post("http://api.cloudinary.com/v1_1/dxntdj3hh/image/upload", data).then((response)=>
            //  console.log(response)
            const res = await fetch("http://api.cloudinary.com/v1_1/dxntdj3hh/image/upload",{
              method:'POST',
              body: data
            })
             const files = await res.json()
             console.log(files);
            //  const Image = await uploadFile(data);
            //  post.picture = Image.secure_url;
             post.picture = files.secure_url;
            //  setImage(files.secure_url);
           }
      }
      getImage();
    },[file])

    const url = post.picture? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'


    const handleChange = (e)=>{
         setPost({ ...post, [e.target.name]: e.target.value });
    }

    const savePost = async () => {
          await createPost(post);
          history.push('/');
    }


    return(
      <Box className={classes.container}>
          <img className={classes.image} src={url} alt='myCreateview'/>
          <FormControl className={classes.title}>
            <label htmlFor="fileInput">
             <AddCircle fontSize="large" color="action"/>
             </label>
             <input
              type="file" 
              id = "fileInput"
              style={{display:'none'}}
              onChange={(e)=>setFile(e.target.files[0])}
              />
             <InputBase
              onChange={(e)=>handleChange(e)} 
               placeholder='Title' 
               className={classes.textfield}
              name='title'
             />
             <Button onClick={() => savePost()} variant='contained' color='primary'>Publish</Button>
          </FormControl>
          <TextareaAutosize
            rowsMin={5}
            placeholder='Tell Your Story......'
            className={classes.textarea}
            onChange={(e)=>handleChange(e)} 
            name='description'
          />
      </Box>
    )
}
export default CreateView;