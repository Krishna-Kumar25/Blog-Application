import {Box,FormControl,InputBase,makeStyles,Button, TextareaAutosize} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { getPost, updatePost } from '../Service/Api.js';
import { useHistory }  from 'react-router-dom';


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


const UpdateView = ({match}) =>{
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    const [post,setPost] = useState(intialValues);
    const history = useHistory();


    const handleChange = (e)=>{
      setPost({ ...post, [e.target.name]: e.target.value });
 }

 const updateBlog = async () => {
       await updatePost(match.params.id,post);
       history.push(`/details/${match.params.id}`);
 }

    useEffect(()=>{
      const fetchData = async () =>{
          let data = await getPost(match.params.id);
          setPost(data); 
      }
      fetchData();
    },[])


    return(
      <Box className={classes.container}>
          <img className={classes.image} src={url} alt='myCreateview'/>
          <FormControl className={classes.title}>
             <AddCircle fontSize="large" color="action"/>
             <InputBase placeholder='Title' onChange={(e)=>handleChange(e)} name='title' value={post.title} className={classes.textfield}/>
             <Button variant='contained' onClick={() => updateBlog()} color='primary'>Update</Button>
          </FormControl> 
          <TextareaAutosize
          onChange={(e)=>handleChange(e)}
            value={post.description}
            rowsMin={5}
            placeholder='Tell Your Story......'
            className={classes.textarea} 
            name='description'
          />
      </Box>
    )
}
export default UpdateView;