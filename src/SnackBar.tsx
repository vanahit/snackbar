import React, {FC, useEffect, useRef, useState} from 'react';
import "./css/snackBar.css";
import {SnackBar} from "./types";
import successIcon from "./assets/svg/tick.svg";
import warningIcon from "./assets/svg/warning.svg";

type SnackBarProps = {
    item: SnackBar
    deleteSnackBar: ((idx: number) => void),
    position: string,
    duration: number
}

const SnackBarComponent: FC<SnackBarProps> = ({item, deleteSnackBar, position, duration,}) => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            setOpen(false);
        }, duration);

        return () => {
            clearTimeout(setTimeoutId);
        }
    }, []);
    return (
        <div
            className={`snackbar snackbar__${item.type} ${position} ${position}-${!open ? 'out' : 'in'}`}
            onAnimationEnd={(e) => !open && deleteSnackBar(item.id)}
        >
            <button onClick={() => setOpen(false)}>
                X
            </button>
            <div className="snackbar_title ">
                <img className="snackbar_image" src={item.type === "success" ? successIcon : warningIcon} alt="icon"/>
                <div>
                    <div className="text-ellipsis"> {item.title} </div>
                    <div className="snackbar_message text-ellipsis"> {item.description} </div>
                </div>
            </div>

        </div>

    );
}

export default SnackBarComponent;
