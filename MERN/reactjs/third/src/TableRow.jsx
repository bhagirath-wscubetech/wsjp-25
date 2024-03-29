import { useState } from "react";

function TableRow(props) {
    const [flag, setFlag] = useState(false);
    function clickHandler() {
        setFlag(!flag);
    }
    return (
        <tr style={
            {
                textDecoration: flag ? 'line-through' : 'none'
            }
        }>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.contact}</td>
            <td>
                <button className={`btn ${flag ? 'btn-danger' : 'btn-primary'}`} onClick={clickHandler}>Toggle</button>
            </td>
        </tr>
    )
}

export default TableRow;