import React, { useState } from 'react'

function CartRow(props) {
    const [qty, setQty] = useState(1);
    const removeQty = () => {
        if (qty == 1) return;
        setQty(qty - 1);
    }
    const addQty = () => {
        setQty(qty + 1);
    }
    return (
        <tr>
            <td>{props.sr}</td>
            <td width={400} >
                <div className='d-flex gap-3'>
                    <img width={100} src={props.image} alt="" />
                    <h6>{props.name}</h6>
                </div>
            </td>
            <td>$ {props.price}</td>
            <td>
                <button onClick={removeQty} className='btn mx-2'>-</button>
                {qty}
                <button onClick={addQty} className='btn mx-2'>+</button>
            </td>
            <td>
                {(qty * props.price).toFixed(2)}
            </td>
        </tr>
    )
}

export default CartRow



// function CartRow() {
//     return (

//     )
// }

// export default CartRow;