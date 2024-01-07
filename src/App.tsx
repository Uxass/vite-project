import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Table, { ColumnsType } from 'antd/es/table'
import { Routes, Route, Link } from 'react-router-dom'
import Artem from './pages/Artyom'
import Vlad from './pages/Vlad'
import { ARTEM_ROUTE, VLAD_ROUTE } from './app/routing/config'
import MainRouter from './app/routing'
import Navbar from './components/navbar'
import { Button } from 'antd'
import { SubmitHandler, useForm } from "react-hook-form";
const App = () => {
  useEffect(()=>{
    console.log(1)
  },[])
  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: {errors, isValid}, // errors - список ошибок валидации для всех полей формы
    reset // метод для очистки полей формы
} = useForm<IMyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
})
interface IMyForm {
  name: string;
  age: number;
  country: string;
}
const saveElement: SubmitHandler<IMyForm> = data => {
  // здесь мы передаём новый массив, который содержит все старые элементы и новый
  // ...prev - мы получаем все элементы текущего стэйте (с помощью spread оператора)
      setTasks((prev) => [...prev, data])
      reset();
  }
const [tasks, setTasks] = useState<IMyForm[]>([])
  const [page, setPage] = useState<number>(1);
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
  }
  const dataSource: DataType[] = [
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
      name: 'Максимильянч',
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
    {
      key: '11',
      name: 'Иван',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '12',
      name: 'Маргарита',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '13',
      name: 'Степан',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '14',
      name: 'Иван',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '15',
      name: 'Максимильянч',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '16',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '17',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '18',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '19',
      name: 'Александр',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '20',
      name: 'Иван',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  const columns: ColumnsType<DataType> = [
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
  return (
    <><Navbar/>
    <Table dataSource={dataSource} columns={columns} pagination={false}/>;
    <Button onClick={() => setPage(page - 1)}>Назад</Button>
    <Button onClick={() => setPage(page + 1)}>Вперед</Button>
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
    <form onSubmit={handleSubmit(saveElement)}>
      <input
          {...register('name', {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                      value: 7,
                      message: "Нужно больше символов - Ваше имя"
                  }
              }
        )}
      />
      <div>{errors.name?.message}</div>
      <input 
          {...register('age', {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                      value: 10,
                      message: "Нужно больше символов"
                  }
              }
          )}
      />
      <input 
          {...register('country', {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                      value: 3,
                      message: "Нужно больше символов"
                  }
              }
          )}
      />
      <div>{errors.country?.message}</div>
      <button disabled={!isValid} type="submit">Сохранить</button>
    </form>
    {
      tasks.map((task) => 
          <p>
              {task.name} - {task.age} - {task.country}
          </p>
      )
    }
    </>
  )

}


 





export default App;


