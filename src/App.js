import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import PageFooter from './components/page_footer'
import PageHeader from './components/page_header'
import Photos from './components/photos'

import expand_menu from './images/icons/expand_menu.png'
import expand_less from './images/icons/expand_less.png'
import hero from "./images/hero.jpg"
import UpcomingShows from './components/show_list'
import BandBios from './components/band_bios'
import DividerHeading from './components/divider_heading'
import missed_connections from './images/albums/missed_connections.jpg'
import carry_on from './images/albums/carry_on.jpg'
import tourist_information from './images/albums/tourist_information.jpg'
import postcards from './images/albums/postcards.jpg'
import fb from './images/social/fb.jpg'
import ig from './images/social/ig.jpg'

const albumItem = props => {
    const {title, year, image_url, cdbaby_url} = props;
    return ( <li key={year}>
        <h4>{`${title} - ${year}`}</h4>
        <a href={cdbaby_url} target='_blank' rel="noopener noreferrer">
            <img className='album_cover' src={image_url} alt="album_cover" />
        </a>
    </li>
    )
}

const albumsArray = [
    {
        title: 'Missed Connections',
        year: '2018',
        image_url: missed_connections,
        tracks: [],
        cdbaby_url: 'https://store.cdbaby.com/cd/theconstanttourists1'
    }, {
        title: 'Carry On',
        year: '2012',
        image_url: carry_on,
        tracks: [],
        cdbaby_url: 'https://store.cdbaby.com/cd/theconstanttourists'
    }, {
        title: 'Tourist Information',
        year: '2011',
        image_url: tourist_information,
        tracks: [],
        cdbaby_url: 'https://store.cdbaby.com/cd/constanttourists3'
    }, {
        title: 'Postcards',
        year: '2009',
        image_url: postcards,
        tracks: [],
        cdbaby_url: 'https://store.cdbaby.com/cd/constanttourists4'
    },
]

class App extends Component {
    constructor(props) {
        super(props)

        this.state ={
            show_nav: false
        }
    }

    onToggle = () => {
        this.setState({ show_nav: !this.state.show_nav})
    }

    renderNavToggle = () => {
        if(this.state.show_nav){
            return (
                <img src={expand_less} alt="hide" height="25px" width="25px" />
            )
        } else {
            return (
                <img src={expand_menu} alt="show" height="25px" width="25px" />
            )
        }
    }

    render() {
        return (
        <div className="App">
            <Router>
                <div id="layout-container">
                    <PageHeader />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/media" component={Media} />
                        <Route exact path="/contact" component={Contact} />
                    <PageFooter />
                </div>
            </Router>
        </div>
        );
    }
}

const Home = () => (
    <div>
        <img className='hero-image' src={hero} alt="" />
        <UpcomingShows />
        <BandBios />
    </div>
)

const Media = () => (
    <div>
        <div className='layoutTopPadding'></div>
            <DividerHeading headerText={'Albums'} />
                <ul id='album_list'>
                    {albumsArray.map(a => albumItem(a))}
                </ul>
            <DividerHeading headerText={'Video'} />
                <iframe title="love_is_dumb" id="love_is_dumb" width="420" height="315" src="https://www.youtube.com/embed/H3rwkCEij88" frameBorder="0" allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"} allowFullScreen></iframe>
            <DividerHeading headerText={'Photos'} />
            <Photos />
    </div>
)


const Contact = () => (
    <div id="contact-container">
        <div className='layoutTopPadding'></div>
        <DividerHeading headerText={'Contact Form'} />
        <div id="contact-form">
            <form name="booking" method="post">
                <input type="hidden" name="form-name" value="booking" />
                <p><label><input type="text" name="name" placeholder="Your Name" required /></label></p>
                <p><label><input type="email" name="email" placeholder="Your Email" required /></label></p>
                <p><label><textarea name="message" placeholder="Your message to the Tourists..." required></textarea></label></p>
                <button className="btn" type="submit">Send Message</button>
            </form>
        </div>
        <DividerHeading headerText={'Social'} />
        <div>
            <h3>Like us on Facebook!</h3>
            <a href="https://www.facebook.com/theconstanttourists/" target='_blank' rel="noopener noreferrer">
                <img className="social-link" src={fb} height="70px" alt="facebook" />
            </a>
        </div>
        <br />
        <div>
            <h3>Follow us on Instagram!</h3>
            <a href="https://www.instagram.com/theconstanttourists/" target='_blank' rel="noopener noreferrer">
                <img className="social-link" src={ig} height="70px" alt="facebook" />
            </a>
        </div>
    </div>
)

export default App;
