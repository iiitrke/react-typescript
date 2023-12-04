import React from "react"
import HomePageLayoutAsFC from "../Layouts/HomePageLayout";
import { Outlet } from "react-router-dom";
import Button2 from "../components/Button2";

import breakpoints from '../services/Breakpoints';
import { useAppContext , contextType} from "../Context";


export const HomePageAsFC: React.FC = ()=>{
    const text:contextType|null = useAppContext();
    return (
<>

<p className="text-lg text-red-600">Home Page data</p>
{text?.size} {text?.name}

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita pariatur nulla exercitationem blanditiis praesentium enim ipsum hic, placeat quidem voluptas a quo, incidunt porro facere reiciendis nesciunt ad repellendus fugit!</p>

</>
    );
} 