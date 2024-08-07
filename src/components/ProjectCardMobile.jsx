import { motion } from "framer-motion";

export const ProjectCardMobile = ({
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
        <p className="text-xs text-start mb-1 ">
          {date} | {location}
        </p>
        <p className="text-xs text-start mb-1 italic">{description}</p>
        <p className="text-xs text-start font-semibold">{usedTechnologies}</p>
      </div>
    </motion.div>
  );
};
