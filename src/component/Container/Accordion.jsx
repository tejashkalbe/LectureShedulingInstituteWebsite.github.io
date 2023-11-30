import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className="pb-8">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => handleClick(id)}
      >
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown className={`${ id === activeIndex ? "rotate-180" : "rotate-0"} transition-all duration-300`}/>
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: "auto" }}
          exit={{height:0}}
          transition={{duration:0.3}}
          style={{overflow:"hidden"}}
          className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate voluptates in nulla officia quasi quibusdam modi? Nobis
              atque et ad unde quam, est quibusdam exercitationem repellendus
              sint eligendi inventore amet!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
