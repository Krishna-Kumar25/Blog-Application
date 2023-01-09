
import {Box, makeStyles, Typography} from '@material-ui/core'

const useStyle = makeStyles({
    container: {
        height: 350,
        border: '1px solid rgba(224,224,224,1)',
        margin: 10,
        borderRadius: '5px',
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *':{
            padding : '0 15 15 15',
        }
        
    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '5px 5px 0 0'
    },
    text: {
        color: '#878787',
        fontSize: 12,
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center'
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word',
    }
})

const Post = ({post})=>{
    const classes = useStyle();
    const url = post.picture || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    return(
       <Box className={classes.container}>
           <img src={url} alt="myimage" className={classes.image} />
           <Typography className={classes.text}>{post.categories}</Typography>
           <Typography className={classes.heading}>{post.title}</Typography>
           <Typography className={classes.text}>Author: {post.username}</Typography>
           <Typography>{post.description}</Typography>
       </Box>
    )
}
export default Post;