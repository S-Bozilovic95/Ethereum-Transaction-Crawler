import React from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const PageButtons = ({handlePages,page}) => {


    return ( 
        <>
            
            <article className='pageBox'>
                <button onClick={()=>handlePages("-")}><FaChevronLeft/></button>
                <span>{page}</span>
                <button onClick={()=>handlePages("+")}><FaChevronRight/></button>
            </article>
           
        </>
     );
}
 
export default PageButtons;            