 import React from "react";
 import { useTable } from 'react-table'
 
export  const  Table=()=> {
   const data = React.useMemo(
     () => [
       {
         col1: 'Hello',
         col2: 'World',
         col3: 'Hello',
         col4: 'World',
       },
       {
         col1: 'react-table',
         col2: 'rocks',
         col3: 'Hello',
         col4: 'World', 
       },
       {
         col1: 'whatever',
         col2: 'you want',
         col3: 'Hello',
         col4: 'World',
       },
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'PhoneNumber',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Model',
         accessor: 'col2',
       },
       {
         Header: 'Issue',
         accessor: 'col3', // accessor is the "key" in the data
       },
       {
         Header: 'Notes',
         accessor: 'col4',
       },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()} style={{ border:'solid 1px blue', width:'100%', }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
	
   )
 }