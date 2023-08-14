export const pageAnimation = {
  hidden: {
    opacity: 0,
    // y: 200,
    x: 3000,
  },
  show: {
    opacity: 1,
    // y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    // y: 200,
    x: 3000,

    transition: {
      duration: 0.6,
    },
  },
};

export const titleAnime = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const imgAnime = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const lineAnime = {
  hidden: {
    width: "0",
  },
  show: {
    width: "100%",
    transition: { duration: 0.75 },
  },
};

export const frameAnime = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const frameContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

export const scrollAnime = {
  hidden: {
    opacity: 1,
    scale: 0.1,
    rotate: 90,
    transition: {
      duration: 0.2,
    },
  },
  show: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const faqScrollAnime = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const ourWorkPageAnime = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const contactUsAnime = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};


