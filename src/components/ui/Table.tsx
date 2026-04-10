import React, { type ReactNode } from 'react';

interface TableColumn {
  key: string;
  label: string;
}

interface TableProps<T = any> {
  columns: TableColumn[];
  data: T[];
  renderCell?: (key: string, row: T) => ReactNode;
}

const Table: React.FC<TableProps> = ({ columns, data, renderCell }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 text-gray-900 dark:text-gray-100">
                  {renderCell
                    ? renderCell(column.key, row)
                    : (row[column.key] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
