import React from "react";
import PakemonList from './components/pakemon/PakemonList'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

const App = () => {
return (
    <div className="App"> 
        <Header/>
        <PakemonList/> 
        <Footer/>
    </div>)
}
export default App;