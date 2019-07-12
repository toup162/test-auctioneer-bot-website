import React from 'react';
// import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <div className="App container-fluid">

            <div className="title">
                <div className="title__text">
                    I'm Buyer's Guide
                </div>
            </div>
            <div className="logo">
                <img class="logo__image row" alt="Bot logo: piles of gold"
                     src="/assets/images/wow-gold-piles-in-the-bank.jpg"></img>
            </div>

            <div className="subtitle">
                <div className="subtitle__text">
                    A Discord bot that can tell you all about World of Warcraft's Action House and economies across US
                    and EU servers.
                </div>
            </div>

            <div className="callToAction">
                <div className="callToAction__title">
                    Ready to get started?
                    <br/>
                    Click here to add me to your Discord server!
                    <br/>
                </div>
                <a className=" callToAction__link"
                   href="https://discordapp.com/oauth2/authorize?&client_id=492451055632777228&scope=bot&permissions=0">
                    <button className="callToAction__link__button">Add me!</button>
                </a>
            </div>

            <div className="footer">
                <span className="footer__text">
                    Made with ❤ by&nbsp;
                    <a className="footer__link" href="https://github.com/Heanthor">
                        Reed
                    </a>
                    &nbsp;&&nbsp;
                    <a className="footer__link" href="https://github.com/unlockedSound">
                        David
                    </a>
                </span>

                <span className="footer__text">
                    &nbsp; | &nbsp;
                </span>

                <a className="footer__link" href="targetPolicyPage.url">
                    Contact
                </a>

                <span className="footer__text">
                    &nbsp; | &nbsp;
                </span>

                <a className="footer__link" href="targetPolicyPage.url">
                    Privacy Policy
                </a>


            </div>

        </div>
    );
}

export default App;
