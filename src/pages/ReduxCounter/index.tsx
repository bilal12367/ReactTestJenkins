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
                <button className='btn' onClick={() => { dispatch(actions.incrementCounter(1)) }}>Increment</button>
                <button className='btn' onClick={() => { dispatch(actions.decrementCounter(1)) }}>Decrement</button>
                <button className='btn' onClick={() => { dispatch(actions.setName('Bilal')) }}>Set Name</button>
                <div className={'box' + (counter > 5 ? ' anim1' : '')}>

                </div>
            </div>
        </div>
    )
}

export default ReduxCounter