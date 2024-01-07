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
    getUniversity(page, limit, offset);
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
const [dataSource, setDataSource] = useState<DataType[]>();
const [page, setPage] = useState<number>(1);
const limit: number = 10
const offset: number = (page - 1) * limit

const getUniversity = async (page: number, limit: number, offset: number) => {
  const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`)
  setDataSource(response.data);    
}

useEffect(() => {
  getUniversity(page, limit, offset);
});
interface DataType {
  country: string;
  name: string;
}
  const columns: ColumnsType<DataType> = [
    {
      title: 'Страна',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Название школы',
      dataIndex: 'name',
      key: 'name',
    },
  ]  
  return (
    <><Navbar/>
    <Table dataSource={dataSource} columns={columns} pagination={false}/>
    <Button onClick={() => setPage((page) => page - 1)} disabled={offset === 1}>Назад</Button>
    <Button onClick={() => setPage((page) => page + 1)}>Вперед</Button>
    <h1>{page}</h1>
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


