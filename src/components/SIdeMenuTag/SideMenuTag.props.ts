import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface SideMenuTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
}
