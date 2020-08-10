import SnackBar from "./SnackBar";
import {DetailedHTMLProps, ImgHTMLAttributes, ReactNode} from "react";

export type SnackBar = {
    id: number,
    title: string,
    description: string,
    backgroundColor: string,
    icon?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
}