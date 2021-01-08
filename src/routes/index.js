import AnimatedTabs from '../components/animated-tabs';
import AnimatedRadioGrid from '../components/animated-radio-grid';

export const routes = [
   {
      path: '/animated-tabs',
      name: 'Animated Tabs',
      component: AnimatedTabs,
   },
   {
      path: '/animated-radio-grid',
      name: 'Animated Radio Grid',
      component: AnimatedRadioGrid,
   },
];

export const defaultPath = '/animated-tabs';
