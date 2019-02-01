import React, {Component} from 'react';
import './App.scss';
import MainContainer from "./components/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div id="all">
                <h2 id="error">Please visit this site from a device with a larger screen.</h2>
                <Header/>
                <MainContainer/>
                <Footer/>
            </div>
        );
    }
}

export default App;
