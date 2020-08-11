import {DetailedHTMLProps, ImgHTMLAttributes} from "react";

export type SnackBar = {
    id: number,
    title: string,
    description: string,
    icon?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    type?: string
}