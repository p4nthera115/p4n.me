import { motion } from "framer-motion";

export default function Stack({ stack, setHover }) {
  return (
    <motion.ol className="flex flex-row gap-3 text-4xl p-1 select-none">
      {stack.map((item, i) => (
        <motion.li
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.7 + i * 0.1, type: "tween" }}
          key={item.name}
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHover(item.name)}
          onMouseLeave={() => setHover("")}
        >
          {item.icon}
        </motion.li>
      ))}
    </motion.ol>
  );
}
