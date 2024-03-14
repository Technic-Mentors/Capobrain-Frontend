import React, { Children, useState } from "react";
import MyContext from "./MyContext";

const MyProvider  = ({children})=>{
    const [signUser, setSignUser] = useState([])
return (
    <MyContext.Provider>
        {children}
    </MyContext.Provider>
)
}

export default MyProvider;