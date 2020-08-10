import React, {FC, useEffect, useRef, useState} from 'react';
import "./css/snackBar.css";
import {SnackBar} from "./types";

type SnackBarProps = {
    id: number,
    item: SnackBar
    deleteSnackBar: ((idx: number) => void),
    position: string,
    duration: number
}

const SnackBarComponent: FC<SnackBarProps> = ({id, item, deleteSnackBar, position, duration,}) => {
    const [open, setOpen] = useState(true);
    // useEffect(() => {
    //     const setTimeoutId = setTimeout(() => {
    //         setOpen(false);
    //     }, duration);
    //
    //     return () => {
    //         clearTimeout(setTimeoutId);
    //     }
    // }, []);
    return (
        <div
            className={`snackbar ${position}-in ${!open && `${position}-out`}`}
            onAnimationEnd={(e) => !open && deleteSnackBar(id)}
            style={{backgroundColor: item.backgroundColor}}
        >
            <button onClick={() => setOpen(false)}>
                X
            </button>
            <div className="snackbar-image">
                {/*<img src={item.icon} alt=""/>*/}
            </div>
            <div>
                <p className="snackbar-title text-ellipsis">{item.title}</p>
                <p className="snackbar-message text-ellipsis">
                    {item.description}
                </p>
            </div>
        </div>

    );
}

export default SnackBarComponent;
