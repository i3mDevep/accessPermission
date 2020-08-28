import React, { useState } from 'react';
import SearchComponentContainer from '../../containers/CompanyContainers/Metricas/SearchComponentContainer';
import CardForDayMetricsContainer from '../../containers/CompanyContainers/Metricas/CardForDayMetricsContainer';

const MetricsPage = () => {

  const [idSubCompany, setIdSubcompany] = useState('');
  const [selecteDate, setSelectDate] = useState(new Date());

  return (
    <>
      <h1> Métricas </h1>
      <SearchComponentContainer sendData={(data) => setIdSubcompany(data.data.id)} />
      <CardForDayMetricsContainer idSubCompany={idSubCompany} dateFilter={selecteDate} dateSearch={(date) => setSelectDate(date)} />
    </>
  );

};

export default MetricsPage;
