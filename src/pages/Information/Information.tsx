/* eslint-disable */
import { useState, useEffect } from "react";

const PersonInfo = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const firstName = "unk";
  const lastName = "unk";
  const age = 19;
  const city = "Москва";

  return (
    <div>
      <h2>Person Information</h2>
      <p>
        <strong>Name:</strong> {firstName} {lastName}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>Я учусь в Московском Политехе и я знаю сколько сейчас времени </p><h1>Время ({time.toLocaleTimeString()})</h1>
    </div>
  );
};

export default PersonInfo;
