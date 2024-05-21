import React from 'react';
import logo from './logo.svg';
import data from './static/stackline_frontend_assessment_data_2021.json'
import './App.css';
import { useReactTable } from'@tanstack/react-table';

function SaleTable({columns, saleData}) {
  const tableInstance = useReactTable({ columns, saleData });
  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

function App() {
  const saleData = React.useMemo(
    () => data[0].sales, [data]
  )
  const columns = React.useMemo(
    () => [
      {
        Header: 'Week Ending',
        accessor: 'weekEnding', 
 
      },
      {
        Header: 'Retail Sales',
        accessor: 'retailSales',
      },
      {
        Header: 'Wholesale Sales',
        accessor: 'wholesaleSales', 
 
      },
      {
        Header: 'Units Sold',
        accessor: 'unitsSold',
      },
      {
        Header: 'Retailer Margin',
        accessor: 'retailerMargin',
      },
    ],
    []
  )
  return (
    <div className='flex flex-col h-screen'>
      <div className='h-8 bg-blue-500 grow-0'>
      </div>
      <div className='bg-slate-500 flex grow'>
        <div className='m-2 grow-0 rounded-lg bg-white p-4'>
          <img src={data[0].image} />

        </div>
        <div className='grow flex flex-col'>
          <div className='m-2 bg-white rounded-lg grow'></div>
          <div className='m-2 bg-white rounded-lg grow'>
            <SaleTable columns={columns} saleData={saleData} />
          </div>

        </div>

      </div>

    </div>
  )
}

export default App;