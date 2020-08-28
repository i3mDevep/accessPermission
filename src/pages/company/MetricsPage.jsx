import React, { useState, useEffect } from 'react';
import moment from 'moment';
import MetricsAllPageContainer from '../../containers/CompanyContainers/Metricas/MetricsAllPageContainer';
import SearchComponentContainer from '../../containers/CompanyContainers/Metricas/SearchComponentContainer';

const MetricsPage = () => {
  const [idSubCompany, setIdSubcompany] = useState('');
  const [elementoSet, setElemento] = useState('');
  const [data, setData] = useState({ hits: [] });
  console.log('elementoPage', elementoSet);
  console.log('elementoPageData', data);

  useEffect(async () => {
    const result = await elementoSet;
    setData(result.data);
  });
  return (
    <>
      <h1> Métricas </h1>
      <SearchComponentContainer sendData={(data) => setIdSubcompany(data.data.id)} />
      <MetricsAllPageContainer elemento={(date) => setElemento(date.date)} idSubcompamy={idSubCompany} elementoSet={elementoSet} />
    </>
  );

};

export default MetricsPage;
