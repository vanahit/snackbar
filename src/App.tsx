import React, {useState} from 'react';
import './App.css';
import {SnackBar} from "./types";
import SnackBarContainer from "./SnackBarContainer";
import {createCSSClass} from "./utils";

function App() {
    const [list, setList] = useState<SnackBar[]>([]);
    const addSnackBar = (item: SnackBar) => {
        if (list.length < 5) {
            setList(p => [...p, {id: Date.now(), ...item}])
        }
    }
    console.log(createCSSClass(["class1", "class2", "class3"], {"class4": false, "class5": true}));
    return (
        <div className="App">
            <button
                onClick={() => addSnackBar({
                    id: Date.now(),
                    title: 'First SnackBar',
                    description: 'This is a snackBar',
                    type: 'success'
                })}
            > Show Tost
            </button>

            <SnackBarContainer
                snackBarList={list}
                setList={setList}
                position={'bottom-right'}
                duration={5000}
            />
        </div>
    );
}

export default App;
