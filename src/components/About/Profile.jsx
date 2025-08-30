import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Myphoto from "../../assets/profilePic.jpg";

const Profile = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* SVG Container */}
      <motion.svg
        className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="https://www.w3.org/2000/svg"
      >
        {/* Rotating Circle */}
        <motion.circle
          cx="253"
          cy="253"
          r="240"
          stroke="#8245ec"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* image */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className="absolute"
      >
        <Tilt
          className="w-[270px] h-[270px] xl:w-[350px] xl:h-[350px]"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          //   scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <img
            src={Myphoto}
            alt="Profile image of Gangadhara Reddy Yaparla in his portfolio website"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Profile;
