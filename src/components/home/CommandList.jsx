import React from 'react';
import pCommandImage from '../../resources/p.png';
import bgCommandImage from '../../resources/bg+.png';

/* Renders a section explaining how to use the discord bot */
const CommandList = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font pt-8">
            <div className="md:w-2/3 w-full mx-auto">
                <div className="container px-3 pb-6 mx-auto flex flex-wrap">
                    <div className="w-full xl:w-2/3">
                        <div className="text-white text-2xl pb-2 md:w-full">Bot Commands</div>
                        <div className="flex relative pl-2 pt-10 pb-20 sm:items-center">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"/>
                            </div>
                            <div className="flex-grow md:pl-8 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className=" text-2xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                                    !bghelp
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-white mb-1 text-xl">Quick Help</h2>
                                    <p className="leading-relaxed">Get all the info you could possibly need on all the other
                                        commands
                                        the
                                        Auction Bot can help you with.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative pl-2 pb-20 sm:items-center">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"/>
                            </div>
                            <div className="flex-grow md:pl-8 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="text-3xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                                    !r
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-white mb-1 text-xl">Pick a Realm, any Realm</h2>
                                    <p className="leading-relaxed">Simply type !r &#123;realm&#125; and hit enter. A few examples:
                                        <br />
                                        <code className="text-purple-300">!r arthas</code> or <code className="text-purple-300">!r
                                            arthas-us</code> for Arthas on US region.
                                        <br />
                                        <code className="text-purple-300">!r moon guard</code> for a two word server name on US
                                        region.
                                        <br />
                                        <code className="text-purple-300">!r r grim batol-eu</code> for a two word server name on EU
                                        region
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative pl-2 pb-20 sm:items-center">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"/>
                            </div>
                            <div className="flex-grow md:pl-8 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="text-3xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                                    !p
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-white mb-1 text-xl">Item Stats Instantly</h2>
                                    <p className="leading-relaxed">Get key stats and information on any item on the Auction
                                        House.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative lg:pl-10 pb-20 sm:items-center w-full">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"/>
                            </div>
                            <img src={pCommandImage}
                                alt="example of !p call for akunda's bite to show the variety of information provided."
                                className="md:pl-10" />
                        </div>
                        <div className="flex relative pl-2 pb-10 sm:items-center">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"/>
                            </div>
                            <div className="flex-grow md:pl-8 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="text-3xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                                    !bg+
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-white mb-1 text-xl">Master of the Craft</h2>
                                    <p className="leading-relaxed pb-2">Every item in a craftable item's recipe and item in the
                                        those
                                        item's
                                        recipes and so on.</p>
                                    <p className="italic">TLDR; know everything there is to know.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative lg:pl-10 pb-20 sm:items-center w-full">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"/>
                            </div>
                            <img src={bgCommandImage}
                                alt="Example of !bg+ call for bountiful captain's feast specifically showing multi-level recipe behavior."
                                className="md:pl-10" />
                        </div>
                        <div className="flex relative pl-2 pb-20 sm:items-center">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center hidden lg:flex">
                                <div className="h-full w-1 bg-gray-800 pointer-events-none"/>
                            </div>
                            <div className="flex-grow md:pl-8 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="text-3xl flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                                    extra
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-white mb-1 text-xl">Other tips and tricks:</h2>
                                    <ul>
                                        <li><span className="italic">Shadowlands</span> legendary items can be searched by rank! Use
                                            <code>/rank #</code> for
                                            example
                                            <br />
                                            <code className="text-purple-300">!p shadowghast ring /rank 4</code>
                                            <br />
                                            You can even combine your favorite shorthand with the rank command such as <code
                                                    className="text-purple-300">!p
                                                shadowghast r /rank 1</code>.
                                            <br />
                                        </li>
                                        <li>
                                            Two of our favorite short hand commands are <code className="text-purple-300">!bg+
                                            palat</code> and <code className="text-purple-300">!bg+ hedon</code> for <span
                                                className="italic">Shadowlands</span> feasts.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default CommandList;