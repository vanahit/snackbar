import React, {FC, useEffect, useRef, useState} from 'react';
import "./css/snackBar.css";
import {SnackBar} from "./types";
import successIcon from "./assets/svg/tick.svg";
import warningIcon from "./assets/svg/warning.svg";

type SnackBarProps = {
    id: number,
    item: SnackBar
    deleteSnackBar: ((idx: number) => void),
    position: string,
    duration: number
}

const SnackBarComponent: FC<SnackBarProps> = ({id, item, deleteSnackBar, position, duration,}) => {
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
            className={`snackbar snackbar-${item.type} ${position}-in ${!open && `${position}-out`}`}
            onAnimationEnd={(e) => !open && deleteSnackBar(id)}
        >
            <button onClick={() => setOpen(false)}>
                X
            </button>

            <div className="snackbar-title ">
                <img className="snackbar-image" src={item.type === "success" ? successIcon : warningIcon} alt="icon"/>
                <div>
                    <p className="text-ellipsis">{item.title}</p>
                    <p className="snackbar-message text-ellipsis">{item.description}
                    </p>
                </div>
            </div>

        </div>

    )
        ;
}

export default SnackBarComponent;
