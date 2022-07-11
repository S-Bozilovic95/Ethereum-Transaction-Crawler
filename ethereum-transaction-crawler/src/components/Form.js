import React,{useState} from 'react';
import {FaSearch} from 'react-icons/fa';

const Form = ({getInfo}) => {

    const [address,setAddress] = useState("");

    const handleAddress = (e) =>{
        e.preventDefault();
        if(address.length!=0){
            getInfo(address);
            setAddress("");
        }
    }

    

    return ( 
            <form className='form' onSubmit={(e)=>handleAddress(e)}>
                <input  type="text" value={address} placeholder='Search by address...' minLength={3} onChange={(e)=>setAddress(e.target.value)} required/>
                <button type='submit'><FaSearch/></button>
            </form>
     );
}
 
export default Form;