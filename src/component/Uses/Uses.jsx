import React from 'react'
import { motion } from 'framer-motion';
import "./Uses.css"

function Uses() {

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    return (
        <>
        
        
        
        
        <div className=" mx-auto p-6">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Software I Use, Gadgets I Love, and Other Things I Recommend
      </motion.h1>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I get asked a lot about the things I use to build software, stay productive, 
        or buy to fool myself into thinking I’m being productive when I’m really just 
        procrastinating. Here’s a big list of all of my favorite stuff.
      </motion.p>
    </div>
        <section className="max-w-4xl user shadow-md mx-auto p-6">


      <motion.h1 
        className="text-3xl  mb-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        Frontend Development Tools
      </motion.h1>
      
      <motion.div 
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-xl font-semibold mb-2">Workstation</h2>
        <p className="tools">
          I use a powerful laptop equipped with a fast processor and 16GB of RAM, 
          allowing me to run multiple applications simultaneously without any lag. 
          This helps me fully concentrate on developing interactive user interfaces.
        </p>
      </motion.div>

      <motion.div 
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-2">High-Resolution External Monitor</h2>
        <p className="tools">
          I work with a 4K external monitor, providing me with more space to work on complex designs 
          without excessive scrolling. The high resolution allows me to see details clearly, 
          making it easier to create professional interfaces.
        </p>
      </motion.div>

      <motion.div 
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-2">Development Tools</h2>
        <ul className="list-disc list-inside">
          <li className="tools">
            <strong>HTML & CSS:</strong> These are the foundation of my web development. HTML 
            allows me to build the structure of pages, while CSS helps me add a beautiful touch 
            that brings designs to life.
          </li>
          <li className="tools">
            <strong>React:</strong> My preferred choice for building dynamic user interface applications. 
            It provides reusable components, making development easier and helping me maintain clean, 
            organized code.
          </li>
          <li className="tools">
            <strong>Tailwind CSS:</strong> I enjoy using it to design responsive interfaces. It allows 
            me to write styles efficiently and focus on the creative side instead of complex customizations.
          </li>
        </ul>
      </motion.div>

      <motion.div 
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Productivity Tools</h2>
        <ul className="list-disc list-inside">
          <li className="tools">
            <strong>Visual Studio Code:</strong> The editor I use for coding. It comes with multiple 
            extensions that help enhance my productivity, such as TypeScript support and code formatting.
          </li>
          <li className="tools">
            <strong>Figma:</strong> My favorite design tool. It allows me to create stunning UI designs 
            and collaborate effectively with my teammates, making it easy for us to exchange ideas and feedback.
          </li>
        </ul>
      </motion.div>
    </section>
        
        </>
    )
}

export default Uses
