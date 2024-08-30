// DraggableComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const DraggableComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg cursor-pointer"
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }} // Constrain drag area
        dragElastic={0.2} // Drag elasticity
        whileDrag={{ scale: 1.1, rotate: 10 }} // Animation while dragging
        whileHover={{ scale: 1.05 }} // Animation on hover
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="flex justify-center items-center h-full text-white font-bold">
          Drag Me!
        </div>
      </motion.div>
    </div>
  );
};

export default DraggableComponent;
