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
        <div className="col-md-12 box-shadow mb-4">
        <div className='m-2 p-2 '>
          <p className="text-center">Recently, I successfully completed the UK 🇬🇧 driving license test—a formidable accomplishment. The process involved obtaining a provisional license, diligently preparing for the Theory and Hazard Test (with an 86% minimum passing mark), and undergoing practical driving lessons with a qualified instructor, covering thousands of traffic rules. The final step was facing the practical test, a 40-minute drive with a rigorous examiner in varying weather and traffic conditions. This journey demanded extensive practice, hard work, prayers, and a bit of good luck, culminating in my success. I am now officially qualified to drive throughout the UK, and it’s an immensely satisfying achievement. I’m sharing my experience to inspire and assist others on their journey, with the hope that it will enhance their chances of success tenfold. If there are specific points you’d like me to cover in this guidebook, please let me know. Best of luck to everyone pursuing their driving goals!</p>
        </div>
        </div>

        <div className="col-md-6 ">
        <div className='m-2  p-3 box-shadow'>
        <div className="text-center">
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
      src="/pdf/Road-to-Success.pdf"
      title="PDF Preview"
      allowFullScreen
      style={{ width: '100%', maxWidth: '700px', height: '400px' }}
    ></iframe>
  </div>
</div>

        </div>
      </div>
        <div className="col-md-6 ">
        <div className='m-2  p-3 box-shadow'>
        <div className="text-center">
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
