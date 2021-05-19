import Hamburger from './components/Hamburger.js';
import Counter from './components/Counter.js';
import ApiRequestAxios from './components/ApiRequestAxios.js';
import ApiRequestFetch from './components/ApiRequestFetch.js';
import ChangeBackground from './components/ChangeBackground.js';
import TypistAnimation from './components/TypistAnimation.js';
import ReactQuery from './components/ReactQuery.js';
import { BasicTable } from './components/ReactTable/BasicTable.js';

export const MyComponents = [
  { title: 'Counter with state', component: <Counter /> },
  { title: 'Api Request with Axios', component: <ApiRequestAxios /> },
  { title: 'Api Request with Fetch', component: <ApiRequestFetch /> },
  { title: 'Animated hamburger menu', component: <Hamburger /> },
  { title: 'Change Background', component: <ChangeBackground /> },
  { title: 'Test React Typist Animation', component: <TypistAnimation /> },
  { title: 'React Query', component: <ReactQuery /> },
  { title: 'React Table', component: <BasicTable /> },
];
