import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"


function Bounty(props) {
    //console.log(props)
    const { firstname, lastname, living, bounty, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            {!editToggle ?
                <>
                    <h1>First name: {firstname}</h1>
                    <h1>Last name: {lastname}</h1>
                    <h1>Living: {living}</h1>
                    <h1>Bounty: {bounty}</h1>
                    <h1>Type: {type}</h1>
                    <button
                        className="delete-btn"
                        onClick={() => props.deleteBounty(_id)}>
                        Delete
                    </button>
                    <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
                :
                <>
                    <AddBountyForm
                        firstname={firstname}
                        lastname={lastname}
                        living={living}
                        bounty={bounty}
                        type={type}
                        _id={_id}

                        btnText="Submit Edit"
                        submit={props.editBounty}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }

        </div>
    )
}

export default Bounty
