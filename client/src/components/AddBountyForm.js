import React, { useState } from "react"

export default function AddBountyForm(props) {
    const initInputs = {
        firstname: props.firstname || "",
        lastname: props.lastname || "",
        living: props.living || "",
        bounty: props.bounty || "",
        type: props.type || ""

    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        //console.log(inputs)
        props.submit(inputs, props._id)
        // post request
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstname"
                value={inputs.firstname}
                onChange={handleChange}
                placeholder="firstname" />

            <input
                type="text"
                name="lastname"
                value={inputs.lastname}
                onChange={handleChange}
                placeholder="lastname" />
            <input
                type="text"
                name="living"
                value={inputs.living}
                onChange={handleChange}
                placeholder="living" />

            <input
                type="text"
                name="bounty"
                value={inputs.bounty}
                onChange={handleChange}
                placeholder="bounty" />

            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="type" />

            <button>{props.btnText}</button>
        </form>
    )
}
