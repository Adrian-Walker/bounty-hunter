const express = require('express')
const { v4: uuidv4 } = require('uuid');
const bountyRouter = express.Router()

//Bounty Names
const bounties = [
    { firstname: "Willie", lastname: "Jenkins", living: "true", bounty: "5,200", type: "Sith", _id: uuidv4() },
    { firstname: "Jeff", lastname: "Jones", living: "true", bounty: "50", type: "Jedi", _id: uuidv4() },
    { firstname: "Kevin", lastname: "Anderson", living: "true", bounty: "190,000", type: "Jedi", _id: uuidv4() },
    { firstname: "Daffy", lastname: "Duck", living: "false", bounty: "5,000,000", type: "Sith", _id: uuidv4() },
    { firstname: "Elroy", lastname: "Jetson", living: "false", bounty: "45,000", type: "Jedi", _id: uuidv4() },

]

//Routes

//get all
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})
//get one
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    console.log("Found bounty is " + foundBounty)
    res.send(foundBounty)
})

//get by type
bountyRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBounties)
    console.log(filteredBounties)

})

//post one
bountyRouter.post("/", (req, res) => {
    console.log(req.body)
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

//delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty")
})

//Update one
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty.id === bountyId)
    const updateBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updateBounty)
})

module.exports = bountyRouter
