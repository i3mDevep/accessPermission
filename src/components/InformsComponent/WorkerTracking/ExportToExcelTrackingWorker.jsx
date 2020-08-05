
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
        <ExcelExportColumn field='identification' title='Identificacion' />
        <ExcelExportColumn field='action' title='Accion' />
        <ExcelExportColumn field='time' title='Fecha-Hora' />
        <ExcelExportColumn field='temperature' title='Temperatuara' />
        <ExcelExportColumn field='address' title='Gps' />

      </ExcelExport>
    </div>
  );
});

export default ExportToExcelTrackingWorker;
