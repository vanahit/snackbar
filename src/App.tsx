import React, {useState} from 'react';
import './App.css';
import {SnackBar} from "./types";
import SnackBarContainer from "./SnackBarContainer";

function App() {
    const [list, setList] = useState<SnackBar[]>([]);
    const addSnackBar = (item: SnackBar) => {
        if (list.length < 5) {
            setList(p => [...p, {id: Date.now(), ...item}])
        }
    }

    return (
        <div className="App">
            <button
                onClick={() => addSnackBar({
                    id: Date.now(),
                    title: 'First SnackBar',
                    description: 'This is a snackBar',
                    type: 'info'
                })}
            > Show Tost
            </button>

            <SnackBarContainer
                snackBarlist={list}
                setList={setList}
                position={'bottom-right'}
                duration={5000}
            />
        </div>
    );
}

export default App;
