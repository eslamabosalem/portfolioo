import React from 'react'
import "./About.css";
import { motion } from 'framer-motion';
function About() {
    return (
        <>
         <section className='About'>
       
            <div className="min-h-screen flex items-center justify-center p-5">
                <div className="max-w-2xl rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        About Me
                    </h1>
                    {/* Using motion.div for animation */}
                    <motion.p 
                        className="mb-4" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }}>
                        I am a front-end designer living in Egypt. Ever since I was young, I have been fascinated by the world of technology and art, where I used to create simple games on my parent's computer. When I was six, I wrote my first program, and that was the beginning of my passion for programming and design.
                    </motion.p>
                    <motion.p 
                        className="mb-4" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        One day, while working on a new project, I found myself exploring some wild ideas for designing an interactive interface. I imagined being able to create a user experience that transports you to another world, a world where users could interact with advanced designs that come to life.
                    </motion.p>
                    <motion.p 
                        className="mb-4" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        Then, while designing one of the interfaces, I decided to incorporate augmented reality elements. I envisioned an app that allows users to bring my designs to life through their phone cameras, where they could see elements interacting in their surrounding space. The idea was crazy, but I felt I was on the verge of discovering something new.
                    </motion.p>
                    <motion.p 
                        className="mb-4" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.3 }}>
                        With enthusiasm and creativity, I created a prototype using React and Framer Motion. I used animations to add liveliness to each element. When I finished, I invited some friends to try out the new design. Watching them interact with the project filled me with great pride. Their laughter and comments ignited my excitement even more.
                    </motion.p>
                    <motion.p 
                        className="mb-4" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        Today, I am working on developing this idea into a real project, aiming to use technology to make designs more interactive and exciting. I believe that design is not just about beauty; it's about creating interactive experiences that inspire others.
                    </motion.p>
                    <motion.p 
                        className="mb-4" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.5 }}>
                        If you are looking for a designer who blends creativity and technology, I am here to make that happen.
                    </motion.p>
                </div>
            </div>
        </section>
        </>
    )
}

export default About
