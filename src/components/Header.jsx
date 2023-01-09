
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component : {
        background : '#FFFFFF',
        color: 'black'
    },
    container : {
        justifyContent: 'center',
        '&>*':{
            padding: 20,
            textDecoration : 'none',
            color: 'inherit'
        }
    }
})

const Header = () => {
    const classes = useStyles();
    return(
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to='/'><Typography>HOME</Typography></Link>
                <Typography>ABOUT US</Typography>
                <Typography>CONTACT US</Typography>
                <Typography>LOG OUT</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;