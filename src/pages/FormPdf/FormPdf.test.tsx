/* eslint-disable */
import { render, fireEvent } from '@testing-library/react';
import FormPDF from './FormPdf';

describe('FormPDF Component', () => {
 it('generates PDF with text and image', () => {
   const { getByRole } = render(<FormPDF />);

   // Input text
   const textInput = getByRole('textbox');
   fireEvent.change(textInput, { target: { value: 'Test Text' } });

   // Input image
   const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
   const imageInput = getByRole('button', { name: /Generate PDF/i });
   fireEvent.change(imageInput, { target: { files: [file] } });

   // Generate PDF
   const generateBtn = getByRole('button', { name: /Generate PDF/i });
   fireEvent.click(generateBtn);
 });
});

