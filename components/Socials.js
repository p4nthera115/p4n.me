import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaSpotify, FaXTwitter } from "react-icons/fa6";

export default function MobileSocials() {
  return (
    <div className="p-4 m-8 rounded-lg bg-[#181818] absolute right-0 top-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-5 items-center self-center text-3xl">
        <a href="https://www.x.com/p4nthera_" target="_blank">
          <FaXTwitter className="hover:scale-110 transition" />
        </a>
        <a href="https://www.github.com/p4nthera115" target="_blank">
          <FaGithub className="hover:scale-110 transition" />
        </a>
        <a href="https://www.instagram.com/_p4nthera" target="_blank">
          <FaInstagram className="hover:scale-110 transition" />
        </a>
        <a href="https://open.spotify.com/user/asdshuja06" target="_blank">
          <FaSpotify className="hover:scale-110 transition" />
        </a>
      </div>
    </div>
  );
}
