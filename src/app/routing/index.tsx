import React  from 'react'
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Vlad from "../../pages/Vlad";
import Gena from '../../pages/Gena';
import Artem from '../../pages/Artyom';
import Oleg from '../../pages/Oleg'
import { ARTEM_ROUTE, GENA_ROUTE, VLAD_ROUTE, OLEG_ROUTE } from './config';

interface RouterProps {
  isAuth: boolean;
}
const MainRouter: React.FC<RouterProps> = ({isAuth = false}) => {
  
  const basedPath: RouteObject[] = [
    { path: ARTEM_ROUTE, element: <Artem />,},
    { path: VLAD_ROUTE, element: <Vlad /> },
    { path: "*", element: <Navigate to={'/'} replace />},
  ]

  const authPath: RouteObject[] = [
    { path: GENA_ROUTE , element: <Gena />,},
    { path: OLEG_ROUTE, element: <Oleg /> },
  ]

  const resultPaths: RouteObject[] = basedPath
  
  if(isAuth){
    resultPaths.push(...authPath)
  }
  return useRoutes(resultPaths);
}

export default MainRouter;