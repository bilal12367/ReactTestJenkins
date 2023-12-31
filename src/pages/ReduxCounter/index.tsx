import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, actions } from '../../store';
import './styles.css'

const ReduxCounter = () => {
    const dispatch = useDispatch();
    const { counter, name } = useSelector((state: AppState) => state.testReducer)
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <h1>Name: {name}</h1>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <button className='btn' onClick={() => { dispatch(actions.incrementCounter(3)) }}>Increment</button>
                <button className='btn' onClick={() => { dispatch(actions.decrementCounter(3)) }}>Decrement</button>
                <button className='btn' onClick={() => { dispatch(actions.setName('MAJID BHAI')) }}>Set Name</button>
                <div className={'box' + (counter > 5 ? ' anim1' : '')}>
                
                </div>
            </div>
        </div>
    )
}

export default ReduxCounter