import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import './VideoCarosel.css';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 2000 : -2000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 2000 : -2000,
      opacity: 0.2,
    };
  },
};

function VideoCarosel() {
  const videoSources = [
    { video: '/videos/854128-hd_1920_1080_25fps.mp4', time: 14000 },
    { video: '/videos/4474369-hd_1920_1080_25fps.mp4', time: 10000 },
    { video: '/videos/1892490-hd_1920_1080_24fps.mp4', time: 7000 },
  ];

  const [[page, direction], setPage] = useState([0, 0]);

  const videoIndex = wrap(0, videoSources.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const time = videoSources[videoIndex].time - 1000;
    setTimeout(() => {
      paginate(1);
    }, time);
  }, [videoIndex]);

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.video
        key={page}
        className="header-background"
        muted
        autoPlay
        custom={direction}
        variants={variants}
        preload="none"
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.4 },
        }}
      >
        <source src={videoSources[videoIndex]?.video} type="video/mp4" />
        Your browser does not support video tag.
      </motion.video>
    </AnimatePresence>
  );
}

export default VideoCarosel;
