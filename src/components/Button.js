import React from 'react'

import '../styles/Button.css'

function Boutton({ theme, text, click}){
    return <button className={theme} onClick={click}>{text}</button>
}

export default Boutton