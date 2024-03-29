import { useState } from "react";
// hook

function Person(props) {
    const [toggle, setToggle] = useState(false);
    const [fontToggle, setFontToggle] = useState(false);
    // [state_name, state_modifier] = useState(<default_value>)

    const buttonClickHandler = () => {
        setToggle(!toggle);
    }
    const buttonClickHandlerFont = () => {
        setFontToggle(!fontToggle);
    }

    return (
        <div className="col">
            <div className="card" style={
                {
                    background: toggle ? 'lightblue' : '',
                    fontSize: fontToggle ? '22px' : ''
                }
            }>
                <div>Name: {props.user_name} </div>
                <div>Age: {props.age}</div>
                <div>Gender: {props.gender}</div>
                <button onClick={buttonClickHandler} className="btn">BG Toggle</button>
                <button onClick={buttonClickHandlerFont} className="btn">FONT Toggle</button>
            </div>
        </div>
    )
}

export default Person;