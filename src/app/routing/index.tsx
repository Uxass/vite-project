
import { ARTEM_ROUTE, VLAD_ROUTE } from './config';
import { useRoutes } from 'react-router-dom';
import Artem from '../../pages/Artyom';
import Vlad from '../../pages/Vlad';

const MainRouter = () => {
    return useRoutes([
          { path: {ARTEM_ROUTE} + ':version', element: <Artem />,},
          { path: VLAD_ROUTE, element: <Vlad /> },
          // { path: "*", element: <Navigate to={UNIVERSITIES_ROUTE} replace />},
        ]);
  }

export default MainRouter;