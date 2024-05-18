import { useRoutes } from "react-router-dom";
import AuthForm from '../../pages/AuthForm/AuthForm';
import UniversityTable from '../../pages/UniversityTable/UniversityTable';
import Oleg from '../../pages/FormPdf/FormPdf'
import { ARTEM_ROUTE, GENA_ROUTE, OLEG_ROUTE } from './config';
const MainRouter = () => {
  return useRoutes([
    { path: ARTEM_ROUTE, element: <UniversityTable /> },
    { path: OLEG_ROUTE, element: <Oleg /> },
    { path: GENA_ROUTE, element: <AuthForm /> }
  ]);
};

export default MainRouter;