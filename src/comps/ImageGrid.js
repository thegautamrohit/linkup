import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setModalimg }) => {
  const { docs } = useFirestore("images");

  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            key={doc.id}
            layout
            className="img-wrap"
            whileHover={{ opacity: 1 }}
            onClick={() => setModalimg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
