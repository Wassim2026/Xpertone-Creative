import React from 'react'
function Alert(props) {
    const capabilities = (word)=> {
        if (word === "danger") {
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'20px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role={"alert"}>
     <strong>{capabilities(props.alert.type)}</strong>:{props.alert.message}</div>}
        </div>
      )

}
export default Alert;