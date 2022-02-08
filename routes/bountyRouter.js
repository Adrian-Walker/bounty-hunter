const express = require('express')

const bountyRouter = express.Router()
// const uuid = require("uuid").v4

//fake data
const bounties = [
    { firstname: "Willie", lastname: "Jenkins", living: "true", bounty: "5,200", type: "Sith", _id: "1" },
    { firstname: "Jeff", lastname: "Jones", living: "true", bounty: "50", type: "Jedi", _id: "2" },
    { firstname: "Kevin", lastname: "Anderson", living: "true", bounty: "190,000", type: "Jedi", _id: "3" },
    { firstname: "Daffy", lastname: "Duck", living: "false", bounty: "5,000,000", type: "Sith", _id: "4" },
    { firstname: "Elroy", lastname: "Jetson", living: "false", bounty: "45,000", type: "Jedi", _id: "5" },

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

//get by genre
bountyRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredBounties = bounties.filter(bounty => bounty.genre === genre)
    res.send(filteredBounties)

})

//post one
bountyRouter.post("/", (req, res) => {
    console.log(req.body)
    const newBounty = req.body
    newBounty._id = uuid()
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
