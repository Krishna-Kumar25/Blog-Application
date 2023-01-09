import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import { Box } from '@material-ui/core';
import DetailView from './components/Post/DetailView';
import CreateView from './components/Post/CreateView';
import UpdateView from './components/Post/UpdateView';
import {BrowserRouter, Switch , Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Box style={{marginTop:64}}>
        <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/details/:id' component={DetailView}/>
         <Route exact path='/create' component={CreateView}/>
         <Route exact path='/update/:id' component={UpdateView}/>
        </Switch>
        </Box>
    </BrowserRouter>
  );
}

export default App;
