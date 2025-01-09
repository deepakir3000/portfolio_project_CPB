import React from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../../assets/images/logo.png";

const MyFooter = () => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='space-y-4 mb-8'>
                        <a href="" className='text-2xl font-semibold flex items-center space-x-1'><img src={logo} alt="" className='w-96 inline-block items-center' />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:mt-4 sm:grid-cols-4 sm:gap-4">
                        <div>
                            <Footer.Title title="Contact" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">9565 S. Railroad Dr. Spring Valley, NY 10977</Footer.Link>
                                <Footer.Link href="#">United States</Footer.Link>
                                <Footer.Link href="#">0800 01234 5678</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Navigation" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="/">Home</Footer.Link>
                                <Footer.Link href="/about">About us</Footer.Link>
                                <Footer.Link href="/products">Product</Footer.Link>
                                <Footer.Link href="/blogs">Blog</Footer.Link>
                                <Footer.Link href="/contact">Contact us</Footer.Link>
                                <Footer.Link href="/career">Career</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Social media" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Twitter</Footer.Link>
                                <Footer.Link href="#">Facebook</Footer.Link>
                                <Footer.Link href="#">Instagram</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Cookie Agreement</Footer.Link>
                                <Footer.Link href="#">Terms of Service</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default MyFooter