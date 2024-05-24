import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { Sale } from '../state/item/itemSlice';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';

const columnHelper = createColumnHelper<Sale>();

const columns = [
  columnHelper.accessor('weekEnding', {
    cell: (info) => info.getValue(),
    header: () => <span>Week Ending</span>,
  }),
  columnHelper.accessor((row) => row.retailSales, {
    id: 'retailSales',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor('wholesaleSales', {
    header: () => <span>Wholesales Sales</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('unitsSold', {
    header: () => <span>Units Sold</span>,
  }),
  columnHelper.accessor('retailerMargin', {
    header: () => <span>Retailer Margin</span>,
  }),
];

function SalesTable() {
  const data = useSelector(
    (state: RootState) => state.item.entities?.[0]?.sales ?? [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className='w-full'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className='border-b-2 border-black'>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='text-left'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <tr key={row.id} className={`border-b-2 border-gray-400 ${i % 2 === 0 ? 'border-dashed' : ''}`}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
