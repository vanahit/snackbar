import React, {FC, useEffect, useState} from 'react';
import "./css/snackBar.css";
import {SnackBar} from "./types";
import SnackBarComponent from "./SnackBar";


type SnackBarContainerProps = {
    snackBarlist: SnackBar[],
    setList: ((p: SnackBar[]) => void),
    position: string,
    duration: number
}

const SnackBarContainer: FC<SnackBarContainerProps> = ({snackBarlist, setList, position, duration,}) => {
    const deleteSnackBar = (id: number): void => {
        let newList = snackBarlist.filter(item => item.id !== id);
        setList(newList);
    }
    return (
        <div className={`snackbar-container ${position}-in`}>
            {
                snackBarlist.map((item: SnackBar, i: number) =>
                    <SnackBarComponent key={item.id} id={item.id} item={item} deleteSnackBar={deleteSnackBar}
                                       position={position}
                                       duration={duration}/>
                )
            }
        </div>
    );
}

export default SnackBarContainer;
