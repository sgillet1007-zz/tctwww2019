import React from 'react'
import logo from '../images/logo.jpg'

export default () => (
    <div id='page-footer'>
        <a id="tel" href={atob('dGVsOjcyMDcwNzUxMDU=')}>
            {atob('Q2FsbDogNzIwLjcwNy41MTA1')}
        </a>
        <a id="email" href={atob('bWFpbHRvOmJvb2tpbmdAdGhlY29uc3RhbnR0b3VyaXN0cy5jb20=')}>
            {atob('RW1haWw6IGJvb2tpbmdAdGhlY29uc3RhbnR0b3VyaXN0cy5jb20=')}
        </a>
        <br />
        <img id="footer-logo" height="70px" src={logo} alt="logo" /><br />
        <small>Copyright The Constant Tourists. All rights reserved.</small>
    </div>
)