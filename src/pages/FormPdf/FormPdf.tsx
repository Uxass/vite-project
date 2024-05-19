/* eslint-disable */
import { useState } from "react";
import jsPDF from "jspdf";

const FormPDF = () => {
  const robotoBase64 = 'data:font/truetype;charset=utf-8;base64,AAEAAAARAQAABAA...';
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    
    // Добавление кастомного шрифта
    doc.addFileToVFS("Roboto-Regular.ttf", robotoBase64);
    doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
    doc.setFont("Roboto");

    doc.text(text, 10, 10);

    if (image) {
      const img = new Image();
      img.src = image;
      doc.addImage(img, "PNG", 10, 20, 50, 50);
    }

    doc.save("generated_pdf.pdf");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
};

export default FormPDF;
