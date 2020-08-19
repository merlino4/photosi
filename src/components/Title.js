import React from 'react'
import '../style/title.css'

export default function Title ({name,title}){
    return (

        <div className="container-title">
            <h1>
                {name}
                <stron>{title}</stron>
            </h1>
        </div>
    )

}