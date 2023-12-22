import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Table from 'antd/es/table'
import { Routes, Route, Link } from 'react-router-dom'
import Artem from './pages/Artyom'
import Vlad from './pages/Vlad'
import { ARTEM_ROUTE, VLAD_ROUTE } from './app/routing/config'
import MainRouter from './app/routing'
import Navbar from './components/navbar'
const App = () => {
  useEffect(()=>{
    console.log(1)
  },[])
  const dataSource = [
    {
      key: '1',
      name: 'Иван',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'Маргарита',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Степан',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'Максимильян',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '8',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '9',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '10',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  
   interface DataType {
     key: string;
     name: string;
     age: number;
     address: string;
     tags: string[];
   }

  return (
    <>
    <Navbar/>
    <Table dataSource={dataSource} columns={columns} />;
    {/* <Artem/>
    <Vlad/>    */}
    <Link to={ARTEM_ROUTE + '/1'}>Открыть Артема - v1</Link>
    <br>
    </br>
    <Link to={ARTEM_ROUTE + '/2'}>Открыть Артема - v2</Link>
    <Link to={VLAD_ROUTE}>Открыть Влада</Link>
    <MainRouter></MainRouter>
    {/* <Routes>
    <Route path='artem' element={<Artem/>} />
    <Route path='vlad' element={<Vlad/>} />
    </Routes> */}
    
    </>
  )

}


 





export default App
