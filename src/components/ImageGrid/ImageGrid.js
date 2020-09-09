import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              className="p-4 cursor-pointer w-full h-80 opacity-75"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
              layout
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                className="w-full h-full object-cover shadow-2xl"
                src={doc.url}
                alt="img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;

// import React from "react";
// import useFirestore from "../../hooks/useFirestore";
// import { motion } from "framer-motion";

// const ImageGrid = ({ setSelectedImage }) => {
//   const { docs } = useFirestore("images");
//   return (
//     <div className="my-5 mx-auto grid grid-cols-3 gap-10">
//       {docs &&
//         docs.map((doc) => {
//           return (
//             <motion.div
//               className="overflow-hidden h-0 py-50% mx-0 relative opacity-75  cursor-pointer"
//               key={doc.id}
//               onClick={() => setSelectedImage(doc.url)}
//               layout
//               whileHover={{ opacity: 1 }}
//             >
//               <motion.img
//                 className="min-w-full min-h-full absolute top-0 left-0 object-cover"
//                 src={doc.url}
//                 alt="img"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1 }}
//               />
//             </motion.div>
//           );
//         })}
//     </div>
//   );
// };

// export default ImageGrid;
