import React from "react";
import { version } from "react-dom/server";
import { useParams } from 'react-router-dom';
const Artem = () => {
    const {version} = useParams()
    return (
    <>Я родился - Моя версия</>
    )
}

export default Artem;