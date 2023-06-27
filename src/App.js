import React from 'react';
import Document from './Document';

const App = () => {
  // Array of documents with doc_id and images
  const documents = [
    {
      doc_id: 0,
      images: [{ img_id: 1 }, { img_id: 2 }, { img_id: 3 }],
    },
    {
      doc_id: 1,
      images: [
        { img_id: 1 },
        { img_id: 2 },
        { img_id: 3 },
        { img_id: 4 },
        { img_id: 5 },
      ],
    },
    // Add more documents as needed
  ];
  function validateFormRows(formRows) {
    for (let i = 0; i < formRows.length; i++) {
      const row = formRows[i];
      const { refNo, fromDate, toDate } = row;

      if (
        (fromDate === undefined || fromDate === null || fromDate === '') &&
        (toDate === undefined || toDate === null || toDate === '')
      ) {
        continue;
      } else if (
        (fromDate !== '' || fromDate !== undefined || fromDate !== null) &&
        (toDate === '' || toDate === undefined || toDate === null)
      ) {
        console.log('error');
      } else if (
        (fromDate === '' || fromDate === undefined || fromDate === null) &&
        (toDate !== '' || toDate !== undefined || toDate !== null)
      ) {
        console.log('error');
      } else {
        continue;
      }

      // If both fromDate and toDate have values, move to the next row
    }

    // All rows passed validation
    return true;
  }

  const filedArray = [
    { refNo: '1', fromDate: '', toDate: '' },
    { refNo: '2', fromDate: '2023-06-26', toDate: '' },
    { refNo: '3', fromDate: '2023-06-25', toDate: '2023-06-30' },
  ];

  const isValid = validateFormRows(filedArray);
  return (
    <div>
      <h1>Document Viewer</h1>
      <Document documents={documents} />
    </div>
  );
};

export default App;
