import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import { COLUMNS } from './columns';
import project_data from './project_data.json';

const StyledTable = styled.div`
  table {
    border-collapse: collapse;

    th,
    td {
      border: 1px solid lightgrey;
      padding: 8px;
    }
    tr {
      text-align: center;
      :nth-child(even) {
        background-color: #f2f2f2;
      }
      :hover {
        background-color: #ddd;
      }
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      background-color: #4caf50;
      color: white;
    }
  }
`;

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => project_data, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <StyledTable>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};
