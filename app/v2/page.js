"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "@/components/v2/Experience";
import { easeIn, motion } from "framer-motion";

export default function page() {
  return (
    <div className="h-full w-full relative flex border rounded-xl border-white/30">
      {/* <Canvas>
        <Suspense>
          <Experience />
        </Suspense>
      </Canvas> */}
      <motion.div
        initial={{
          padding: 0,
          height: 0,
          width: 0,
          opacity: 1,
          x: "50px",
        }}
        animate={{
          top: "0px",
          height: "400px",
          width: "300px",
          opacity: [1, 0, 1, 0, 1],
          x: 0,
        }}
        transition={{
          duration: 1,
          width: { ease: "circOut" },
          height: { delay: 0.5, ease: "circOut" },
          opacity: { duration: 0.24, delay: 0.5, type: "tween" },
          top: { delay: 0.5, ease: "circOut" },
          x: { delay: 0.85, ease: "circOut" },
        }}
        className="absolute h-1/3 w-1/3 border rounded-lg m-4 p-4 bottom-0"
      ></motion.div>
      <motion.div
        initial={{
          padding: 0,
          height: "500px",
          width: 0,
          opacity: 1,
          bottom: "15%",
        }}
        animate={{
          bottom: "0%",
          height: "300px",
          width: "400px",
          opacity: [1, 0, 1, 0, 1],
        }}
        transition={{
          duration: 1,
          width: { ease: "circOut" },
          height: { delay: 0.5, ease: "circOut" },
          opacity: { duration: 0.24, delay: 0.5, type: "tween" },
          bottom: { delay: 0.9, ease: "circOut" },
        }}
        className="absolute h-1/3 w-1/3 border rounded-lg m-4 p-4 bottom-0 right-0"
      ></motion.div>
      <motion.div
        initial={{
          padding: 0,
          height: "0px",
          width: 0,
          opacity: 1,
          top: "15%",
        }}
        animate={{
          top: "0%",
          height: "200px",
          width: "500px",
          opacity: [1, 0, 1, 0, 1],
        }}
        transition={{
          width: { delay: 1.3, ease: "circOut" },
          height: { delay: 1.8, ease: "circOut" },
          opacity: { duration: 0.24, delay: 1.8, type: "tween" },
          top: { delay: 2.2, ease: "circOut" },
        }}
        className="absolute h-1/3 w-1/3 border rounded-lg m-4 p-4 bottom-0 right-0"
      ></motion.div>
    </div>
  );
}
