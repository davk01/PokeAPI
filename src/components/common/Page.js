import React from  'react';
import './Page.css'
const Page = (props) => {
    const {offset, totalPages,handleChangePage } = props
    return(
        <div className="Page">
            <button onClick={()=> handleChangePage("prev")} disabled={offset <= 1} > &larr;</button>
            <span> <b>{offset}</b> of <b>{totalPages}</b> </span>
            <button onClick={()=> handleChangePage("next")} disabled={offset >= totalPages}>&rarr;</button>
        </div>
    )
}
export default Page;