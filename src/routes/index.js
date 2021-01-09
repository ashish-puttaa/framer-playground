import AnimatedTabs from '../components/animated-tabs';
import AnimatedRadioGrid from '../components/animated-radio-grid';
import AnimatedSwitch from '../components/animated-switch';
import DraggableSwitch from '../components/draggable-switch';

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
   { path: '/draggable-switch', name: 'Draggable Switch', component: DraggableSwitch },
];

export const defaultPath = '/animated-tabs';
