import Post from "./Post"

import { Grid } from "@material-ui/core";
import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPost } from "../Service/Api.js";


const Posts = ()=>{
    const [posts,setPost] = useState([]);
    const {search} = useLocation();
    // let posts = [1,2,3,4,5,6,7,8,9,10,11,12];
    
    useEffect(()=>{
         const fetchData = async ()=>{
           let data = await getAllPost(search);
           console.log(data);
           setPost(data);
         }
         fetchData();
    }, [search])


    return(
       posts.map(post =>(
           <Grid item lg={3} sm={4} xs={12}>
              <Link to={`/details/${post._id}`} style={{textDecoration:'none', color:'inherit'}}>
                <Post post={post}/>
              </Link>
           </Grid>
       ))
    )
}
export default Posts;