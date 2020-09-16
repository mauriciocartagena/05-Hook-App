import React,{ memo } from 'react'

export const Small = memo(( { value } ) => {

    console.log('Me volvi a llamar :D');
    return (
        <small>
            { value }
        </small>
    )
})
