import React, { useEffect, useState } from 'react';
import API from '../assets/api';
import {apiKey} from'../assets/apiKey';
import Table from './Table';

const Home = () => {
    const [info, setInfo] = useState({
        data:[],
        loading:true,
    })

    const {data,loading} = info;

    const getInfo = async()=>{
        let response = await API.get(`?module=account&action=txlist&address=0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F&startblock=9000000&endblock=latest&page=1&offset=50&sort=desc&apikey=${apiKey}`);
        setInfo({...info, data:response.data.result, loading:false});
    }

    useEffect(()=>{
        getInfo()
    },[])

    return ( 
        <section className='home container'>
            {!loading? <Table data={data}/>:"no data"}
        </section>
     );
}
 
export default Home;