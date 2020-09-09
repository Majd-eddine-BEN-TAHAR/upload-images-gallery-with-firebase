import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const toggleBackdrop = (e) => {
    if (e.target.classList.contains("backdrop")) {
      e.target.classList.add("hideBackdrop");
      setTimeout(() => {
        setSelectedImage(null);
      }, 300);
    }
  };
  return (
    <>
      {selectedImage && (
        <motion.div
          className="backdrop fixed top-0 left-0 w-full h-full bg-backdrop"
          onClick={toggleBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {selectedImage && (
            <motion.img
              className="block max-w-60% max-h-80% my-16 mx-auto shadow-md border-4 border-white"
              src={selectedImage}
              alt="img"
              initial={{ y: "-100vh" }}
              animate={{ y: "0" }}
            />
          )}
        </motion.div>
      )}
    </>
  );
};

export default Modal;
