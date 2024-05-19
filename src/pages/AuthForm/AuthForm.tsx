import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IMyForm {
  name: string;
  age: number;
  email: string;
}

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      age: undefined,
      email: "",
    },
  });
  const [submittedData, setSubmittedData] = useState<IMyForm | null>(null);
  const [elementList, setElementList] = useState<IMyForm[]>([]);

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    setSubmittedData(data);
    setElementList((prevList) => [...prevList, data]);
    reset();
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div>
      <form onSubmit={handleSubmit(saveElement)}>
        <label>
          Имя:
          <input
            {...register("name", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 5,
                message: "Нужно больше символов",
              },
            })}
          />
        </label>
        <div>{errors.name?.message}</div>
        <label>
          Возраст:
          <input
            {...register("age", {
              required: "Поле обязательно для заполнения",
              min: {
                value: 18,
                message: "Возраст должен быть больше 18",
              },
              pattern: {
                value: /^\d+$/,
                message: "Введите число",
              },
            })}
          />
        </label>
        <div>{errors.age?.message}</div>
        <label>
          Email:
          <input
            {...register("email", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный email",
              },
            })}
          />
        </label>
        <div>{errors.email?.message}</div>
        <button type="submit" disabled={!isFormValid}>
          Сохранить
        </button>
      </form>

      {elementList.length > 0 && (
        <div>
          <h2>Список элементов:</h2>
          <ul>
            {elementList.map((element, index) => (
              <li key={index}>
                <p>Имя: {element.name}</p>
                <p>Возраст: {element.age}</p>
                <p>Email: {element.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {submittedData && (
        <div>
          <h2>Последний сохраненный элемент:</h2>
          <p>Имя: {submittedData.name}</p>
          <p>Возраст: {submittedData.age}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
