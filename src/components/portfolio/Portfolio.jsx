import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p11.jpg",
    title: "FeedFlux - Anonymous feedback website",
    desc: ` Built an anonymous feedback website with Next.js, allowing users to provide and receive feedback anonymously. It features AI-powered suggestions that assist users in crafting clear and constructive feedback by generating real-time writing prompts as they type. The platform offers a user-friendly interface, and ensures fast performance through server-side rendering. \n
    Technologies Used: Next.js, React, Zod, Tailwind CSS, NextAuth, Mongoose, Axios, bcrypt, TypeScript.

    `
,
    link: "https://github.com/ASR999/FeedFlux",
  },
  {
    id: 2,
    img: "/p22.jpg",
    title: "HomeWise - Real Estate listing",
    desc: `Developed a real estate viewing website built with the MERN stack. It allows users to
browse and search property listings, schedule viewings, and save favorites. The platform
features advanced search filters and an admin dashboard for managing listings. With a
responsive design, it provides a user-friendly experience for both buyers and real estate
agents, simplifying the property search process. 
Technologies Used: React.js, Node.js, JavaScript,Express.js, HTML, Tailwind
CSS, JWT, bcrypt,MongoDB, Mongoose,Redux,Firebase.`,
    link: "https://github.com/ASR999/HomeWise",
  },
  {
    id: 3,
    img: "/p33.jpg",
    title: "InsightPdf",
    desc: `The PDF Interaction Software website aims to provide users with a comprehensive platform
for interacting with, modifying, and analyzing PDF documents. Key features include interactive tools for highlighting and annotating, modification capabilities like converting files, a
summarizing feature that condenses PDF content into concise overviews, and an interactive
question-and-answer functionality where users can ask questions related to the PDF content,
and the application provides answers.
Technologies Used: React.js, Node.js, JavaScript, Tailwind CSS, HTML, Stripe,
Zod, Prisma.

`,
    link: "https://github.com/ASR999/InsightPdf",
  },
  
  {
    id: 4,
    img: "/p55.jpg",
    title: "Animated Portfolio Website",
    desc: "Portfolio Website using React.js.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();
    
    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;