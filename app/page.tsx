"use client"

import Image from 'next/image'
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import {useState} from "react";


export default function Home() {
    const [isopen, setisopen] = useState(false);
    const toggle = () => {
        setisopen(!isopen);
    };
  return (
   <div>
       <Navbar toggle={toggle} />

       <Sidebar isopen={isopen} toggle={toggle} />
   </div>
  )
}
