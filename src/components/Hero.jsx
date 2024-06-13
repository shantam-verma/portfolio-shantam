import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ShantamVermaProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-5 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Shantam Verma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
            <a
              href="https://drive.google.com/file/d/1sWIN6S1SqVrCvKQdd9LamG4GCDteGXjX/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                variants={container(1.3)}
                initial="hidden"
                animate="visible"
                className="bg-neutral-900 px-6 py-3 rounded-2xl"
              >
                View Resume
              </motion.button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0, filter: "brightness(1)" }}
              animate={{ x: 0, opacity: 1, filter: "brightness(0.5)" }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-[550px] h-[600px] rounded-2xl"
              src={profilePic}
              alt="Shantam Verma"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
