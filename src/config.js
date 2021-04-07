module.exports = {
  email: 'mtaruno@u.rochester.edu',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mtaruno',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mtaruno',
    },
    {
      name: 'Medium',
      url: 'https://matthewevantaruno.medium.com',
    },
  ],

  navLinks: [
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    // navy: '#0a192f',
    // darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
