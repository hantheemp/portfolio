import { motion } from "framer-motion";

export const ProjectCard = ({
  date,
  location,
  role,
  description,
  usedTechnologies,
  image,
  reversed,
}) => {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <div>
        <p className="text-sm text-start mb-2 italic">{description}</p>
        <p className="font-extrabold italic text-sm text-start">{usedTechnologies}</p>
      </div>
    </motion.div>
  );
};
