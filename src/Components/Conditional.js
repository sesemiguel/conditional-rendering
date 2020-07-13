import React from "react"

function Conditional(props) {
    return(
        <>
        {props.isLoading ? <h2>Loading...</h2> : <h2>Finished Loading</h2>}
        {/* This translates to the code below
        if (props.isLoading === true) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <h1>Finished Loading</h1>
        ) */}
        </>
    )
    

}

export default Conditional