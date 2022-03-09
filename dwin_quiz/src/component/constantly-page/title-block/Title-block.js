import React from "react"
import SearchBlock from "./search-block/Search";
import StartButton from "./start-button/Start-button";
import './Title-block.scss'
import UserBlock from "./user-block/User-block";


export default function TitleBlock(){
    return(
        <div className="titleBlock">
            <div className='homePageTitle'>
                Quiz Time
            </div>
            <SearchBlock/>
            <StartButton/>
            <UserBlock/>
        </div>
    )
}