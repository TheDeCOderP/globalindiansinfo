import Head from 'next/head';
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
      const response = await fetch('/pdf/10-Leaders-Lesson-from-Prabhu-Shri-Ram.pdf');
      const blob = await response.blob();

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = '10-Leaders-Lesson-from-Prabhu-Shri-Ram.pdf';
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  
  

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  return (
    <div className="container mt-5 mb-5">
      <Head>
      <title>Ayodhya - Global Indians Info</title>
      </Head>
      <div className="row flex justify-content-center">
       
        <div className="col-md-12 col-sm-12 ">
        <div className='m-2  p-3 pt-4 box-shadow'>
        <div className="text-center ">
          <h1 className='text-center mb-5'>10 Leadership Lessons from Prabhu Shri Ram</h1>
        <Link href="/pdf/10-Leaders-Lesson-from-Prabhu-Shri-Ram.pdf" target="_blank" className="m-3"> <button
              className="btn btn-success p-2"
             
            >
              View PDF
            </button>
            </Link>
            <button
              className="button rounded mb-3"
              onClick={handleDownloadPDF1}
            >
              Download PDF
            </button>

          
          </div>
          
          

          <div className="d-flex justify-content-center mb-4">
            
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      className="embed-responsive-item"
      src="/pdf/10-Leaders-Lesson-from-Prabhu-Shri-Ram.pdf"
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
