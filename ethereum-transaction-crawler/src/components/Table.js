import React from 'react';
import TableItem from './TableItem';

const Table = ({data}) => {

    return ( 
      <div className='tableBox container'>

        {typeof(data)!== "string" ?(
            <table>
                <tbody>
                    <tr>
                        <th>Taxation Hash:</th>
                        <th>Block Num:</th>
                        <th>Date:</th>
                        <th>From:</th>
                        <th>To:</th>
                        <th>Value:</th>
                        <th>Price (in Eth):</th>
                    </tr>
                    {
                        data.map((el,index)=> <TableItem info={el} key={index}/>)
                    }
                </tbody>
            </table>
        ):"no result"}
      </div>
     );
}
 
export default Table;
