export const ButtonVariants = {
   initial: {
      opacity: 0,
   },
   expanded: {
      flex: 9,
      opacity: 1,
      transition: {
         type: 'spring',
         duration: 0.8,
      },
      // backgroundColor: '#ef798a',
   },
   shrunk: {
      flex: 1,
      opacity: 1,
      transition: {
         type: 'spring',
         duration: 0.8,
      },
      // backgroundColor: '#f6b6c0',
   },
};

export const wrapperVariants = {
   initial: {
      x: -300,
      opacity: 0,
   },
   visible: {
      x: 0,
      opacity: 1,
   },
};

export const TextVariants = {};

export const buttonMotion = (selected) => ({
   initial: selected ? 'shrunk' : 'expanded',
   animate: selected ? 'expanded' : 'shrunk',
   transition: 'transition',
   exit: { opacity: 0 },
   variants: ButtonVariants,
});

export const textMotion = {
   initial: { opacity: 0, display: 'none' },
   animate: { opacity: 1, display: 'block' },
   exit: { opacity: 0 },
   transition: { delay: 0.2 },
};
