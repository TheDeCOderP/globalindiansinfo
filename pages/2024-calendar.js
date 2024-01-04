import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfPreview = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownloadPDF1 = async () => {
    try {
      const response = await fetch('/pdf/Road-to-Success.pdf');
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Road-to-Success.pdf';
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  const handleDownloadPDF2 = async () => {
    try {
      const response = await fetch('/pdf/2024-Calender.pdf');
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = '2024-Calender.pdf';
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  return (
    <div className="container mt-5">
      <div className="row">
       
        <div className="col-md-12 col-sm-12 ">
        <div className='m-2  p-3 box-shadow'>
        <div className="text-center">
        <Link href="/pdf/2024-Calender.pdf" target="_blank" className="m-3"> <button
              className="btn btn-success p-2"
             
            >
              View PDF
            </button>
            </Link>
            <button
              className="button rounded mb-3"
              onClick={handleDownloadPDF2}
            >
              Download PDF
            </button>

          
          </div>
          
          

          <div className="d-flex justify-content-center mb-4">
            
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      className="embed-responsive-item"
      src="/pdf/2024-Calender.pdf"
      title="PDF Preview"
      allowFullScreen
      style={{ width: '100%', maxWidth: '700px', height: '400px' }}
    ></iframe>
  </div>
</div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default PdfPreview;
