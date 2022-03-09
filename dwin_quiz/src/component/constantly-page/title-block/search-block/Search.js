import React from "react"
import "antd/dist/antd.css";
import { Input, Space } from "antd";

const { Search } = Input;

export default function SearchBlock(){
    const onSearch = value => console.log(value);
    return (
        <div>
            <Space direction='search'>
                <Search placeholder="search" onSearch={onSearch} style={{ width: 240 }} />
            </Space>
        </div>
    )
}