import React, { Component} from "react"
import { Link } from 'react-router-dom'

import expand_menu from '../images/icons/expand_menu.png'
import expand_less from '../images/icons/expand_less.png'

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
