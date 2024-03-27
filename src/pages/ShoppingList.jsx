import { useState } from 'react';
import './ShoppingList.css';

function ShoppingList(){
    const   [list, setList] = useState(['test 1', 'test 2', 'test 3']);
    const [text, setText] = useState('');

//this function addItem
    function addItem(){
        console.log('adding item')
        /**
     * create a copy
     * modify your copy
     * set the copy
     */
        let copy =[...list];
        copy.push(text);
        setList(copy);
}
    function handleTextChange(e){
        const val = e.target.value;
        setText(val);
    }
    function deleteAll(){
        setList([]);
    }
    return(
        <div className='shopping-list page'>
            <h1>Shopping List</h1>

        <div className='box'>
            <input onChange={handleTextChange} type='text' />
            <button onClick={addItem} className="btn btn-sm btn-success">
                Add</button>
            <button onclick={deleteAll} className='btn btn-sm btn-danger'>
                Clear
            </button>
        </div>
        
        <ul>
            {list.map((x) => (
                <li>{x}</li>
            ))}
        </ul>


        </div>
    );
}

export default ShoppingList;
