import React from 'react';
import TableItem from './TableItem';

const Table = ({data}) => {

    return ( 
      <div className='tableBox container'>
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
                    typeof(data)!== "string" ?
                    data.map((el,index)=>{
                        return <TableItem info={el} key={index}/>
                    }):"no result"
                }
            </tbody>
        </table>
      </div>
     );
}
 
export default Table;
