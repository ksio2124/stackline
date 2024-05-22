import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import jsonData from './static/stackline_frontend_assessment_data_2021.json'
import * as React from 'react'

  type Item = {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number
    retailerMargin: number
  }

  const columnHelper = createColumnHelper<Item>()

const columns = [
  columnHelper.accessor('weekEnding', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.retailSales, {
    id: 'retailSales',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('wholesaleSales', {
    header: () => 'wholesalesSales',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('unitsSold', {
    header: () => <span>unitsSold</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('retailerMargin', {
    header: 'retailerMargin',
    footer: info => info.column.id,
  }),
]

function SalesTable() {
    const salesData = jsonData[0].sales;
    const [data, _setData] = React.useState(() => [...salesData])
    const rerender = React.useReducer(() => ({}), {})[1]
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
  
    return (
      <div className="p-2">
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
        <div className="h-4" />
        <button onClick={() => rerender()} className="border p-2">
          Rerender
        </button>
      </div>
    )
}

export default SalesTable;