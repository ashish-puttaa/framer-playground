import AnimatedTabs from '../components/animated-tabs';
import AnimatedRadioGrid from '../components/animated-radio-grid';
import AnimatedSwitch from '../components/animated-switch/animated-switch.component';

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
   { path: '/animated-switch', name: 'Animated Switch', component: AnimatedSwitch },
];

export const defaultPath = '/animated-tabs';
