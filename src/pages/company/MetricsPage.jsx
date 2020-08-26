import React, { useState } from 'react';
import MetricsAllPageContainer from '../../containers/CompanyContainers/Metricas/MetricsAllPageContainer';
import SearchComponentContainer from '../../containers/CompanyContainers/Metricas/SearchComponentContainer';

const MetricsPage = () => {
  const [idSubCompany, setIdSubcompany] = useState('');
  return (
    <>
      <h1> Métricas </h1>
      <SearchComponentContainer sendData={(data) => setIdSubcompany(data.data.id)} />
      <MetricsAllPageContainer idSubcompamy={idSubCompany} />
    </>
  );

};

export default MetricsPage;
