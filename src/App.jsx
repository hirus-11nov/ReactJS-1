import React, { Component } from 'react'
import Header from './Components/Home/Header'
import Slider from './Components/Home/Slider'
import Content from './Components/Home/Content';
import Footer from './Components/Home/Footer';

export default class App extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <Slider></Slider>
                <Content></Content>
                <Footer></Footer>
            </>
        )
    }
}
