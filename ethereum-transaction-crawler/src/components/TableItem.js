import React, { useEffect, useState } from 'react';
import API from '../assets/api';
import {apiKey} from'../assets/apiKey';
import moment from 'moment';


const TableItem = ({info}) => {
    // states & hooks
    const [name, setName] = useState({
        data:[],
        loading:true,
    })
    const {data,loading}= name;


    // functions
    const getName = async(address)=>{
        let response = await API.get(`?module=contract&action=getsourcecode&address=${address}&apikey=${apiKey}`);
        setName({...name, data:response.data.result[0].ContractName, loading:false});
    }


    useEffect(()=>{
        getName(info.to)
    },[])


    return ( 
        <tr>
            <td>
                {info.input}
            </td>
            <td>
                {info.blockNumber}
            </td>
            <td>
                {moment(info.timeStamp*1000).utc().format('YYYY-MM-DD HH:mm')}
            </td>
            <td>
                {info.from}
            </td>
            <td>
                {data===undefined?info.to:data}
            </td>
            <td>
                {info.value>0?(info.value/1000000000000000000).toFixed(8):0} Ether
            </td>
            <td>
                {(info.gasUsed*info.gasPrice/1000000000000000000).toFixed(8)} 
            </td>
        </tr>
     );
}
 
export default TableItem;