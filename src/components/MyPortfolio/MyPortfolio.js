import { BookOpenIcon, LightningBoltIcon, MailIcon } from '@heroicons/react/solid';
import React from 'react';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { SiReactrouter } from "react-icons/si";
import { SiTailwindcss, SiFirebase, SiExpress, SiMongodb } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoHtml5 } from "react-icons/io";

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/71LYkwk/MACR0746-removebg-preview-1.png" className="sm:max-w-xs  md:max-w-md rounded-lg shadow-2xl" />
                    <div className=' p-2'>
                        <h1 className="text-4xl font-bold">Md.Mahmudun Naby</h1>
                        <p className="py-6">I am a ambicious web developer, highly pationate about web based technologies. I really building web applications and explore new technologies.In two years down the line want to see myself as a full stack web devloper in a reputed organization</p>
                        <div className="stats stats-vertical shadow bg-neutral ">

                            <div className="stat justify-items-center">
                                <MailIcon className='h-8 w-8  text-warning'></MailIcon>
                                <div className="stat-title text-warning">mahmudunnabyemon0@gmail.com</div>
                            </div>

                            <div className="stat justify-items-center">
                                <BookOpenIcon className='h-8 w-8 text-warning'></BookOpenIcon>
                                <div className="stat-title text-warning">Management Information Syatems (DU)</div>
                                <div className="stat-title text-warning">Electrical & Electronic Engineering (AIUB)</div>
                            </div>
                            <div className="stat justify-items-center">
                                <BookOpenIcon className='h-8 w-8 text-warning'></BookOpenIcon>
                                <div className="stat-title text-warning">Projects</div>
                                <div className="stat-title text-warning">Indipendent Service Provider <a className='btn btn-active btn-ghost' target="_blank" href="https://independent-service-prov-e89b6.web.app/"> Link</a> </div>
                                <div className="stat-title text-warning">Music Product <a className='btn btn-active btn-ghost' target="_blank" href="https://sensational-biscotti-c85d6e.netlify.app/"> Link</a> </div>
                            </div>

                            <div className="stat justify-items-center">
                                <LightningBoltIcon className='h-8 w-8 text-center text-warning '></LightningBoltIcon>
                                <div className="stat-title text-warning">Experties</div>


                                <div className='grid md:grid-cols-3 md:gap-6 grid-cols-3 gap-4 justify-items-center mt-5 '>

                                    <IoLogoHtml5 className='h-8 w-8  text-warning'></IoLogoHtml5>
                                    <FaCss3Alt className='h-8 w-8  text-warning'></FaCss3Alt>
                                    <BsBootstrapFill className='h-8 w-8  text-warning'></BsBootstrapFill>
                                    <SiTailwindcss className='h-8 w-8  text-warning'></SiTailwindcss>
                                    <DiJavascript1 className='h-8 w-8  text-warning'></DiJavascript1>
                                    <FaReact className='h-8 w-8  text-warning'></FaReact>
                                    <SiReactrouter className='h-8 w-8  text-warning'></SiReactrouter>
                                    <SiFirebase className='h-8 w-8  text-warning'></SiFirebase>
                                    <SiExpress className='h-8 w-8  text-warning'></SiExpress>
                                    <SiMongodb className='h-8 w-8  text-warning'></SiMongodb>
                                    <DiNodejs className='h-8 w-8  text-warning'></DiNodejs>
                                </div>




                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;