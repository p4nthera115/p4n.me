import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaSpotify, FaXTwitter } from "react-icons/fa6";

export default function MobileSocials() {
  return (
    <motion.div className="px-4 rounded-lg bg-[#181818] flex flex-row gap-4 justify-between ">
      <div className="self-center items-center">
        <FaSpotify className="h-12 w-6 flex" />
      </div>
      <div className="flex flex-row gap-3">
        <FaXTwitter className="h-12 w-6 flex" />
        <FaGithub className="h-12 w-6 flex" />
        <FaInstagram className="h-12 w-6 flex" />
      </div>
    </motion.div>
  );
}
