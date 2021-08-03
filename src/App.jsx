import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import NavBar from './components/Navbar';
import Personajes from './components/personajes';
import Header from './components/Header';
import Footer from './components/footer';
import axios from 'axios';
import {useState, useEffect} from 'react';

//URL_PERSONAJES: https://gateway.marvel.com:443/v1/public/characters?apikey=82ff1cf8cce6fd40740ff33e7c3e8fa4
//URL_COMICS: https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&apikey=82ff1cf8cce6fd40740ff33e7c3e8fa4

//KEY PUBLICA: 82ff1cf8cce6fd40740ff33e7c3e8fa4

//ts: 1

// 1ac9c9be6247b5869724973378fb0f35eb7c9575882ff1cf8cce6fd40740ff33e7c3e8fa4

//md5 hash: 701d1cfdf211c83a243c48151af87aee



function App() {

const [personajes, setPersonajes]=useState([])
const API_URL = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&formatType=comic&apikey='
const API_KEY = '82ff1cf8cce6fd40740ff33e7c3e8fa4'
const API_HASH = '701d1cfdf211c83a243c48151af87aee'


  // bien nos conectaremos con useEffect y Axios que es una libreria para hacer llamadas asincronas de manera mas 
  // rapida y es mejor que utilizar fetch nativo...

  useEffect( () => {
    axios.get(`${API_URL}${API_KEY}&hash=${API_HASH}`).then(res => {
        setPersonajes(res.data.data.results)    
    }).catch(error => console.log(error))
  },[])

  // console.log(personajes)


  


  return (
    <div className="App">
      <NavBar/>

      <Header/>
      
      <div className='comics_container'>
          
          <h1>COMICS</h1>

          <div className="row row-cols-1 row-cols-md-3 g-4">

          { personajes.map(per => (
            
             <Personajes per={per} key={per.id}/>
       
           ))
       
        }
        
      </div>
      </div>
      
      
      <Footer/>

    


    </div>
  

  );
  
} 


export default App;
