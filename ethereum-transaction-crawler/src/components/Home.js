import React, { useEffect, useRef, useState } from 'react';
import API from '../assets/api';
import {apiKey} from'../assets/apiKey';
import Skeleton from '../Skeleton';
import Form from './Form';
import PageButtons from './PageButtons';
import Table from './Table';

const Home = () => {
    // states & hooks
    const [info, setInfo] = useState({
        data:[],
        loading:true,
    })
    const [page, setPage] = useState(1);
    const {data,loading} = info;   
    const prevAddress = useRef();

    // functions
    const getInfo = async(address)=>{
        if(prevAddress.current === address){
            let response = await API.get(`?module=account&action=txlist&address=${address}&startblock=9000000&endblock=latest&page=${page}&offset=30&sort=desc&apikey=${apiKey}`);
            setInfo({...info, data:response.data.result, loading:false});
            localStorage.setItem("wallet",address);

        }else  if(prevAddress.current != address){
            setPage(1)
            setInfo({...info,loading:true})
            let response = await API.get(`?module=account&action=txlist&address=${address}&startblock=9000000&endblock=latest&page=${page}&offset=20&sort=desc&apikey=${apiKey}`);
            setInfo({...info, data:response.data.result, loading:false});
            localStorage.setItem("wallet",address);
        }
    }

    const handlePages=(value)=>{
        if(value==="-" && page>1){
            setPage(page-1);
        }else if( value==="+"){
            setPage(page+1);
        }
    }


    
    useEffect(()=>{
        prevAddress.current= localStorage.wallet;
        getInfo(localStorage.wallet);
        window.scrollTo({top:0,behavior:'smooth'});
    },[page])

    return ( 
        <section className='home container'>
             <Form getInfo={getInfo}/>
            {!loading? <Table data={data}/>:<Skeleton/>}
            <PageButtons handlePages={handlePages} page={page}/>
        </section>
     );
}
 
export default Home;