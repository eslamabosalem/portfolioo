import React from 'react'
import Hero from "../2-Hero/Hero";
import Main from "../3-Main/Main";
import Contact from "../4-Contact/Contact";
function ShowHeader() {
    return (
        <>

<Hero/>
<div className="divider" />
<Main/>
<div className="divider" />
<Contact/>
<div className="divider" />


        </>
    )
}

export default ShowHeader
