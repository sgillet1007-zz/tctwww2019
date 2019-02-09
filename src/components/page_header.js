import React, { Component} from "react"
import { Link } from 'react-router-dom'

import expand_menu from '../images/icons/expand_menu.png'
import expand_less from '../images/icons/expand_less.png'

import AudioPlayer from 'react-modular-audio-player';
import play_arrow from '../images/icons/play_arrow.png'
import pause from '../images/icons/pause.png'
import forward from '../images/icons/forward.png'
import rewind from '../images/icons/rewind.png'

// import shes_coming_back from '../tracks/shes_coming_back.mp3'
// import inspector_clousso from '../tracks/inspector_clousso.mp3'
import satan from '../tracks/satan.mp3'
// import in_the_city from '../tracks/in_the_city.mp3'
// import rufus from '../tracks/rufus.mp3'
// import tocame from '../tracks/tocame.mp3'

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
                <div id="audio_container">
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
                </div>
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
        src: 'http://soundsilk.com/wp-content/uploads/2016/01/SoundSilk-Drum-cowbell.mp3',
        title: 'Cowbell 1'
    }, {
        src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Cowbell%20Hit-8994-Free-Loops.com.mp3',
        title: 'Cowbell 2'
    }, {
        src: satan,
        title: 'Satan Inc.'
    },
]

const rearrangePlayer = [
  {
      className: "audio-container",
      style: { fontFamily: 'Oswald', fontSize: '0.9rem'},
      innerComponents: [
        //   {
        //       type: 'name',
        //       style: {width: "100px", overflow: 'scroll'}
        //    },
          { 
              type: 'rewind',
              style: {width: "70px"}
          },
          { 
              type: 'play',
              style: {width: "70px"}
           },
          { 
              type: 'forward',
              style: {width: "70px"}
           },
      ]
  }
]