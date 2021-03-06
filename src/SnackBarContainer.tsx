import React, {FC, useEffect, useState} from 'react';
import "./css/snackBar.css";
import {SnackBar} from "./types";
import SnackBarComponent from "./SnackBar";


type SnackBarContainerProps = {
    snackBarList: SnackBar[],
    setList: ((p: SnackBar[]) => void),
    position: string,
    duration: number
}

const SnackBarContainer: FC<SnackBarContainerProps> = ({snackBarList, setList, position, duration,}) => {
    const deleteSnackBar = (id: number): void => {
        let newList = snackBarList.filter(item => item.id !== id);
        setList(newList);
    }
    return (
        <div className={`snackbar_container ${position}-in`}>
            {
                snackBarList.map((item: SnackBar, i: number) =>
                    <SnackBarComponent key={item.id} item={item} deleteSnackBar={deleteSnackBar}
                                       position={position}
                                       duration={duration}/>
                )
            }
        </div>
    );
}

export default SnackBarContainer;
