
import React, { forwardRef } from 'react';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';

const ExportToExcelTrackingWorker = forwardRef(({ data }, ref) => {

  return (
    <div>
      <ExcelExport
        data={data}
        fileName='NominaEmpleados.xlsx'
        ref={ref}
      >
        <ExcelExportColumn field='name' title='Nombre' />
        <ExcelExportColumn field='identification' title='Identificacion' />
        <ExcelExportColumn field='action' title='Accion' />
        <ExcelExportColumn field='timetracking.value' title='Fecha-Hora' />
        <ExcelExportColumn field='subCompany' title='Sede' />
        <ExcelExportColumn field='salary' title='Salario' />
        <ExcelExportColumn field='gender' title='Genero' />
        <ExcelExportColumn field='cellphone' title='Telefono' />
        <ExcelExportColumn field='temperature' title='Temperatura' />
        <ExcelExportColumn field='gps' title='Gps' />
      </ExcelExport>
    </div>
  );
});

export default ExportToExcelTrackingWorker;
