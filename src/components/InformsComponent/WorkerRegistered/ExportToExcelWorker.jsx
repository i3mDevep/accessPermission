
import React, { forwardRef } from 'react';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';

const ExportToExcel = forwardRef(({ data }, ref) => {

  return (
    <div>
      <ExcelExport
        data={data}
        fileName='EmpleadosRegistrados.xlsx'
        ref={ref}
      >
        <ExcelExportColumn field='identification' title='Identificacion' />
        <ExcelExportColumn field='name' title='Nombres' />
        <ExcelExportColumn field='lastname' title='Apellidos' />
        <ExcelExportColumn field='address' title='Direccion' />
        <ExcelExportColumn field='cargo' title='Cargo' />
        <ExcelExportColumn field='celphone' title='Celular' />
        <ExcelExportColumn field='contrate' title='Contrato' />
        <ExcelExportColumn field='email' title='Email' />
        <ExcelExportColumn field='salary' title='Salario' />
        <ExcelExportColumn field='gender' title='Genero' />
        <ExcelExportColumn field='sede.value' title='Sede' />

        {/* <ExcelExportColumn field='ProductName' title='Product Name' />
        <ExcelExportColumnGroup
          title='Availability'
          headerCellOptions={{ textAlign: 'center' }}
        >
          <ExcelExportColumn field='UnitPrice' title='Unit Price' />
          <ExcelExportColumn field='UnitsOnOrder' title='Units On Order' />
          <ExcelExportColumn field='UnitsInStock' title='Units In Stock' />
        </ExcelExportColumnGroup> */}
      </ExcelExport>
    </div>
  );
});

export default ExportToExcel;
