import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Frontend - JavaScript, HTML, CSS, ReactJs, NextJs, Tailwind CSS, TypeScript, Zod...",
            1000,
            "Backend - NodeJs, ExpressJs, MongoDb, SQL, NextAuth, JWT, Redis... ",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
     
    </motion.div>
  );
};

export default Speech;