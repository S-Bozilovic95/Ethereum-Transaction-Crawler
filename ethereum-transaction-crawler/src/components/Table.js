import React, { useState } from 'react';
import NoResult from './NoResult';
import TableItem from './TableItem';

const Table = ({data}) => {
    const[show,setShow]=useState(false);

    const handleDetails = () =>{
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }
 

    return ( 
      <>
        {typeof(data)!== "string" ?(
           <>
           <button onClick={()=>handleDetails()} className="changeBtn">{!show?"show detailed":"show regular"}</button>
            <div className='tableBox container' style={show?{overflow:"auto"}:null}>
                <table className={show?'detailed':'regular'}>
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
           </div>
           </>
        ):<NoResult/>}
      </>
     );
}
 
export default Table;
