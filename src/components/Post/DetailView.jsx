import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getPost, deletePost } from "../Service/Api.js";

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
  item: {
    float: "right",
  },
  icon: {
    border: "2px solid #878787",
    padding: "5px",
    margin: "5px",
    borderRadius: "5px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "600",
    textAlign: "center",
    margin: "50px 0px",
  },
  subheading: {
    display: "flex",
    color: "#878787",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  Link: {
    textDecoration:"none",
    color: "inherit"
  }
}));

const DetailView = ({match}) => {
  const classes = useStyle();
  const [post,setPost] = useState({});
  const history = useHistory();

  const url =post.picture || "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";



  useEffect(()=>{
    const fetchData = async () =>{
         let data = await getPost(match.params.id);
         console.log(data);
         setPost(data);
    }
    fetchData();
  }, [])

  const deleteBlog = async()=>{
      await deletePost(post._id);
      history.push('/');
  }

  return (
    <Box className={classes.container}>
      <img src={url} alt="myImage" className={classes.image} />
      <Box className={classes.item}>
        <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary" /></Link>
        <Delete onClick={()=>deleteBlog()} className={classes.icon} color="error" />
      </Box>
      <Box>
        <Typography className={classes.title}>{post.title}</Typography>
      </Box>
      <Box className={classes.subheading}>
        <Link to={`/?username=${post.username}`} className={classes.Link}>
        <Typography>
          Author:<span style={{ fontWeight: "600" }}>{post.username}</span>
        </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>{new Date(post.createdate).toDateString()}</Typography>
      </Box>
      <Box>
        <Typography>
          {post.description}
        </Typography>
      </Box>
    </Box>
  );
};
export default DetailView;
