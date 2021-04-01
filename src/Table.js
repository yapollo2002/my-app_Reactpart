 import React from "react";
 import { useTable } from 'react-table';
 
 
export  const  Table=(props)=> {
     const data =props.data; 
       console.log(data);  

{/*const data = React.useMemo(
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
   )   */}

       
       
     const data1 =  [
       {
         "phoneNumber": 1,
         "model": 'World',
         "issue": 'Hello',
         "notes": 'World',
       },
       {
         "phoneNumber": 2,
         "model": 'rocks',
         "issue": 'Hello',
         "notes": 'World', 
       },
       {
         "phoneNumber": 3,
         "model": 'you want',
         "issue": 'Hello',
         "notes": 'World',
       },
     ];  
       console.log(data1); 
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'PhoneNumber',
         accessor: 'phoneNumber', // accessor is the "key" in the data
       },
       {
         Header: 'Model',
         accessor: 'model',
       },
       {
         Header: 'Issue',
         accessor: 'issue', // accessor is the "key" in the data
       },
       {
         Header: 'Notes',
         accessor: 'notes',
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