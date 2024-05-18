import React from "react";
import { version } from "react-dom/server";
import { useParams } from 'react-router-dom';
const PDF = () => {
    const {version} = useParams()
    return (
    <>Первый модуль с PDF</>
    )
}

export default PDF;