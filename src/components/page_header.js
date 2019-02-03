import React, { Component} from "react"
import { Link } from 'react-router-dom'

import expand_menu from '../images/icons/expand_menu.png'
import expand_less from '../images/icons/expand_less.png'

import AudioPlayer from 'react-modular-audio-player';
import play_arrow from '../images/icons/play_arrow.png'
import pause from '../images/icons/pause.png'
import forward from '../images/icons/forward.png'
import rewind from '../images/icons/rewind.png'

import shes_coming_back from '../tracks/shes_coming_back.mp3'
import inspector_clousso from '../tracks/inspector_clousso.mp3'
import satan from '../tracks/satan.mp3'
import in_the_city from '../tracks/in_the_city.mp3'
import rufus from '../tracks/rufus.mp3'
import tocame from '../tracks/tocame.mp3'

export default class PageHeader extends Component {
    constructor(props) {
        super(props)

        this.state ={
            show_nav: false
        }

        this.onToggle = this.onToggle.bind(this);
        this.renderNavToggle = this.renderNavToggle.bind(this);
    }

    onToggle() {
        this.setState({ show_nav: !this.state.show_nav})
    }

    renderNavToggle() {
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
            <div id="header_container">
                <span id='toggle_nav_tray' onClick={this.onToggle}>{this.renderNavToggle()}</span>
                <span id='band_name_container'>
                        <Link id='band_name' to="/">
                            <p className="band_name_word">- The</p>
                            <p className="band_name_word">Constant</p>
                            <p className="band_name_word">Tourists -</p>
                        </Link>
                </span>
                <span id="audio_container">
                    <AudioPlayer 
                            audioFiles={tracks}
                            fontColor={'white'}
                            fontSize={'1em'}
                            iconSize={'2em'}
                            playIcon={play_arrow}
                            playHoverIcon={play_arrow}
                            pauseIcon={pause}
                            pauseHoverIcon={pause}
                            forwardIcon={forward}
                            forwardHoverIcon={forward}
                            rewindIcon={rewind}
                            rewindHoverIcon={rewind}
                            hideSeeking
                            hideLoop
                            hideRewind
                            rearrange={rearrangePlayer}
                        />
                </span>
                {this.state.show_nav && (
                    <div id='nav_tray'>
                        <Link className='nav-link' id='nav-media' to="/media/">{'- Media -'}</Link>
                        <Link className='nav-link' id='nav-media' to="/">{'- Home -'}</Link>
                        <Link className='nav-link' id='nav-booking' to="/contact/">{'- Contact -'}</Link>
                    </div>)
                }
            </div>
        )
    }
}

const tracks = [
    {
        src: satan,
        title: 'Satan Inc.'
    },
    {
        src: shes_coming_back,
        title: 'She\'s Coming Back'
    },
    {
        src: inspector_clousso,
        title: 'Inspector Clousso'
    },
    {
        src: rufus,
        title: 'Rufus'
    },
    {
        src: in_the_city,
        title: 'In The City'
    },
    {
        src: tocame,
        title: 'Tocame'
    }
]

const rearrangePlayer = [
  {
      className: "audio-container",
      style: { fontFamily: 'Oswald', fontSize: '0.9rem'},
      innerComponents: [
          {
              type: 'name',
              style: {width: "100px", overflow: 'scroll'}
           },
          { 
              type: 'rewind',
              style: {width: "30px"}
          },
          { 
              type: 'play',
              style: {width: "30px"}
           },
          { 
              type: 'forward',
              style: {width: "30px"}
           },
      ]
  }
]