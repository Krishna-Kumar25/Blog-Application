
import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image : {
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width:'100%',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& :first-child':{
            fontSize: 75,
            color: '#FFFFFF',
            lineHeight: 1,
        },
        '& :last-child' : {
            fontSize: 28,
            color: '#FFFFFF'
            // background:'#FFFFFF',
        }


    },
    
});

const Banner = ()=>{
    const classes = useStyles();
    return(
         <Box className={classes.image}>
             <Typography>BLOG</Typography>
             <Typography>inspiring way.....</Typography>
         </Box>
    )
}
export default Banner;