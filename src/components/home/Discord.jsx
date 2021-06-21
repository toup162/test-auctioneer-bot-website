import React from 'react';
import MoneyAndCoins from '../../resources/money_and_coins.png'

/* Renders a hero section describing Buyer's Guide */
const Discord = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 pt-5 mx-auto flex flex-wrap md:w-2/3 md:border-solid md:border-b border-gray-700">
                <div className="flex flex-col flex-wrap lg:py-6 text-center md:mx-auto border-b border-solid md:border-none">
                    <div className="flex flex-col pb-8 lg:items-start items-center">
                        <div className="w-12 h-12 mx-auto inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5">
                            <img className="h-8" src={MoneyAndCoins} alt="logo with pile of treasure"/>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3 capitalize text-5xl">the best price every
                                time</h2>
                            <div className="pb-5">
                            <p className="leading-relaxed text-base text-3xl">Make your gold go farther with convenient
                                stats sent to you in Discord for every item on the auction house!</p>
                            <p>Quickly know information like the cheapest price or what mats you should buy if crafting for US
                                and EU servers.</p>
                        </div>
                        <div className="flex justify-around">
                            <a target="_blank" rel="noreferrer"
                            className="inline-flex text-white bg-purple-700 border-0 px-6 focus:outline-none hover:bg-purple-600 rounded h-12 content-center flex justify-center mr-3"
                            href="https://discordapp.com/oauth2/authorize?&client_id=492451055632777228&scope=bot&permissions=0">
                                <i className="fas fa-robot fa-lg mr-2 my-auto"></i>
                                <p className="my-auto">Add to Discord</p>
                            </a>
                            <a target="_blank" rel="noreferrer"
                            className="inline-flex text-purple-400 border-solid border border-purple-400 bg-gray-900 border-0 px-6 focus:outline-none hover:text-purple-300 hover:border-purple-300 rounded h-12 content-center flex justify-center"
                            href="https://discord.gg/Jv2DpfzXNC">
                                <svg className="h-full mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 245 240">
                                    <path className="discord-st0"
                                        d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/>
                                    <path className="discord-st0"
                                        d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
                                </svg>
                                <p className="mt-auto mb-auto">Join the Server</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

    );
}

export default Discord;