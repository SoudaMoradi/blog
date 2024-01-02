import React, {useState} from 'react';
import {Menubar} from "primereact/menubar";
import {Button} from "primereact/button";
import HomeTab from "./HomeTab";
import Bloge from "./Bloge";
import Didactic from "./Didactic";
import Contact from "./Contact";
import * as Iconly from "react-iconly";
import {Avatar} from "primereact/avatar";

function MyMenubar({items,end,start}) {
    return(
        <div className="flex p-3 w-full bg-indigo-800">

            <div>{start}</div>

            <div className="flex-1 flex justify-content-center align-items-center gap-3 bg-yellow-200 border-round-3xl shadow-5 h-4rem">
            {
                items.map((i)=>(<Button className="p-button-text text-black-alpha-90 text-lg" label={i.label} onClick={i.command}/>))
            }
            </div>
            <div>{end}</div>
        </div>
    )
}
function Home(props) {

    const[tab,setTab]=useState('homeTab');

    const items=[
        {
            label:'صحفه اصلی',
            command: () => {setTab('homeTab')},
        },
        {
            label:'بلاگ و ولاگ',
            command:()=>{setTab('blog')}

        },
        {
            label:'آموزشی',
            command:()=>{setTab('didactic')}

        },
        {
            label:'ارتباط با من',
            command:()=>{setTab('contact')}

        },
    ]

    const tabContent={

        homeTab:<HomeTab/>,
        blog:<Bloge/>,
        didactic:<Didactic/>,
        contact:<Contact/>

    }

    function MenubarStart() {
        return(
            <div className="flex justify-content-center align-items-center gap-2 pl-2 pt-2">
                <Avatar className="bg-yellow-200 text-lg shadow-5" label={'ر م'} size={"large"} shape={'circle'}/>
                <span className="font-bold text-2xl text-white">رهاوب</span>
            </div>
        );
    }

    function MenubarEnd() {
        return(
            <div className="flex justify-content-center align-items-center pr-2 pt-2 ">
                <Button className="p-button-outlined w-8rem p-button-rounded text-sm text-black-alpha-90 bg-yellow-200 shadow-5" label={'ثبت نام'}/>
            </div>
        )

    }


    const person={
        name:'hasan',
        family:'ahmadi',
    }



    return (
        <div className="flex flex-column h-full w-full ">
            <MyMenubar items={items} start={<MenubarStart/>} end={<MenubarEnd/>}/>
            <div  className="w-full h-full flex">
                {
                    tabContent[tab]
                }
            </div>
        </div>
    );
}

export default Home;