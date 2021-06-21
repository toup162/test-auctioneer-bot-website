import React from 'react';
import LogoImage from '../../resources/logo.jpg';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

const Header = props => {
    const {pageName, classNames} = props;

    return (
        <header className={`${classNames ? classNames + ' ' : ''}text-gray-500 body-font shadow-2xl`}>
            <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                <div className="flex title-font w-full font-medium items-center text-white mb-4 md:mb-0 justify-between pr-8">
                    <div className="flex items-center">
                        <img src={LogoImage} className="inline-block ml-4 mt-4 mb-4 h-20 rounded-full border-4 border-purple-500"
                            alt="logo with pile of treasure" />
                        <span className="ml-3 text-xl">Buyer's Guide: {pageName}</span>
                    </div>
                    
                    <div className="flex flex-1 justify-end">
                        <div className="flex hidden sm:flex">
                            <div className="ml-3 border-r border-gray-600 pr-6">
                                <Link to="/" className="nav-link">
                                    <i className="fas fa-robot fa-lg mr-2 my-auto hidden md:inline"></i>
                                    Discord Bot
                                </Link>
                            </div>
                            <div className="ml-6">
                                <Link to="/web-tool" className="nav-link">
                                    <i className="fas fa-stream mr-2 my-auto hidden md:inline"></i>
                                    Web Tool
                                </Link>
                            </div>
                        </div>

                        {/* Hamburger menu will only show in <small width */}
                        <div className="app-burger ml-4 block sm:hidden">
                            <Menu right>
                                <div className="">
                                    <Link to="/" className="nav-link nav-link-hamburger w-full block p-4 border-t border-b border-gray-700">
                                        <i className="fas fa-robot fa-lg mr-2 my-auto w-8"></i>
                                        Discord Bot
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/web-tool" className="nav-link nav-link-hamburger w-full block p-4 border-b border-gray-700">
                                        <div className="flex">
                                            <div className="w-8 flex justify-center mr-2">
                                                <i className="fas fa-stream my-auto" />
                                            </div>
                                            Web Tool
                                        </div>
                                    </Link>
                                </div>
                            </Menu>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;