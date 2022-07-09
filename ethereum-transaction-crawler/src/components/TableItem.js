import React, { useEffect, useState } from 'react';
import API from '../assets/api';
import {apiKey} from'../assets/apiKey';


const TableItem = ({info}) => {
    
    const [name, setName] = useState({
        data:[],
        loading:true,
    })
    const {data,loading}= name;

    const getName = async(address)=>{
        let response = await API.get(`?module=contract&action=getsourcecode&address=${address}&apikey=${apiKey}`);
        setName({...name, data:response.data.result[0].ContractName, loading:false});
    }

    console.log(info);

    useEffect(()=>{
        getName(info.to)
    },[])

    
    



    return ( 
        <tr>
            <td className='txHash' style={{width:"10px"}}>
                {info.input}
            </td>
            <td>
                {info.blockNumber}
            </td>
            <td>
                {new Date(info.timeStamp*1000).toLocaleDateString("en-US")}
            </td>
            <td>
                {info.from}
            </td>
            <td>
                {data===undefined?info.to:data}
            </td>
            <td>
                {info.value} Ether
            </td>
            <td>
                {(info.gasUsed*info.gasPrice/1000000000000000000).toFixed(8)} 
            </td>
        </tr>
     );
}
 
export default TableItem;