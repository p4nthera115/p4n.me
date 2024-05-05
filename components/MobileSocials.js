import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaSpotify, FaXTwitter } from "react-icons/fa6";

export default function MobileSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.0,
        type: "tween",
        ease: "easeInOut",
      }}
      className="px-4 rounded-lg bg-[#181818] flex flex-row  justify-center self-center "
    >
      {/* <div className="self-center items-center"> */}
      {/* </div> */}
      <div className="flex flex-row gap-5">
        <a href="https://www.x.com/p4nthera_" target="_blank">
          <FaXTwitter className="h-12 w-6 flex" />
        </a>
        <a href="https://www.github.com/p4nthera115" target="_blank">
          <FaGithub className="h-12 w-6 flex" />
        </a>
        <a href="https://www.instagram.com/_p4nthera" target="_blank">
          <FaInstagram className="h-12 w-6 flex" />
        </a>
        <a href="https://open.spotify.com/user/asdshuja06" target="_blank">
          <FaSpotify className="h-12 w-6 flex" />
        </a>
      </div>
    </motion.div>
  );
}
