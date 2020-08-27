import React, { useState } from 'react';
import moment from 'moment';
import MetricsAllPageContainer from '../../containers/CompanyContainers/Metricas/MetricsAllPageContainer';
import SearchComponentContainer from '../../containers/CompanyContainers/Metricas/SearchComponentContainer';
import PikerDay from '../../components/Metrics/PikerDay';

const MetricsPage = () => {
  const [idSubCompany, setIdSubcompany] = useState('');
  const [sendTimeDay, setTime] = useState(new Date());
  return (
    <>
      <h1> Métricas </h1>
      <PikerDay sendDay={(date) => setTime(date.dateDay)} />
      <SearchComponentContainer sendData={(data) => setIdSubcompany(data.data.id)} />
      <MetricsAllPageContainer sendTimeDay={sendTimeDay} idSubcompamy={idSubCompany} />
    </>
  );

};

export default MetricsPage;
