import React from 'react';
import logo from './wow-gold-piles-in-the-bank.jpg';
import './App.scss';

function App() {
    return (
        <div className="page">
            <div className="page__body container-fluid">
                <div className="page__title">
                    <div className="page__title__text">
                        I'm Buyer's Guide
                    </div>
                </div>
                <div className="page__logo">
                    <img class="page__logo__image row" alt="Bot logo: piles of gold"
                         src={logo}></img>
                </div>

                <div className="page__subtitle">
                    <div className="page__subtitle__text">
                        A Discord bot that can tell you all about World of Warcraft's Action House and economies across
                        US
                        and EU servers.
                    </div>
                </div>

                <div className="page__callToAction">
                    <div className="page__callToAction__title">
                        Ready to get started?
                        <br/>
                        Click here to add me to your Discord server!
                        <br/>
                    </div>
                    <a className=" page__callToAction__link"
                       href="https://discordapp.com/oauth2/authorize?&client_id=492451055632777228&scope=bot&permissions=0">
                        <button className="page__callToAction__link__button">Add me!</button>
                    </a>
                </div>
            </div>
            <div className="page__footer">
                <span className="page__footer__text">
                    Made with ❤ by&nbsp;
                    <a className="page__footer__link" href="https://github.com/Heanthor">
                        Reed
                    </a>
                    &nbsp;&&nbsp;
                    <a className="page__footer__link" href="https://github.com/unlockedSound">
                        David
                    </a>
                </span>

                <span className="d-block d-sm-none"></span>

                <span className="page__footer__text d-none d-sm-inline">
                    &nbsp; | &nbsp;
                </span>

                <a className="page__footer__link" href="targetPolicyPage.url">
                    Contact
                </a>

                <span className="page__footer__text">
                    &nbsp; | &nbsp;
                </span>

                <a className="page__footer__link" href="targetPolicyPage.url">
                    Privacy Policy
                </a>
            </div>

        </div>
    );
}

export default App;
