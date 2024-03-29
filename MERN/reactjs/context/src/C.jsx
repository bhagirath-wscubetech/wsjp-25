import React, { useContext } from 'react'
import Button from './Button'
import { Context } from './Main';

export default function C() {
    const { count, incHandler, descHandler } = useContext(Context); // consumer
    return (
        <div>
            {count}
            <hr />
            <Button handler={descHandler}>-</Button>
            <Button handler={incHandler}>+</Button>
        </div>
    )
}
