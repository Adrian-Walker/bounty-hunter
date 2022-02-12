const express = require('express')
// const { v4: uuidv4 } = require('uuid');
const bountyRouter = express.Router()
const Bounty = require('../models/bounties.js')

//Bounty Names
// const bounties = [
//     { firstname: "Willie", lastname: "Jenkins", living: "true", bounty: "5,200", type: "Sith", _id: uuidv4() },
//     { firstname: "Jeff", lastname: "Jones", living: "true", bounty: "50", type: "Jedi", _id: uuidv4() },
//     { firstname: "Kevin", lastname: "Anderson", living: "true", bounty: "190,000", type: "Jedi", _id: uuidv4() },
//     { firstname: "Daffy", lastname: "Duck", living: "false", bounty: "5,000,000", type: "Sith", _id: uuidv4() },
//     { firstname: "Elroy", lastname: "Jetson", living: "false", bounty: "45,000", type: "Jedi", _id: uuidv4() },

// ]

//Routes

//get all
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})
//get one
// bountyRouter.get("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     console.log("Found bounty is " + foundBounty)
//     res.send(foundBounty)
// })

//get by type
// bountyRouter.get("/search/type", (req, res) => {
//     const type = req.query.type
//     const filteredBounties = bounties.filter(bounty => bounty.type === type)
//     res.send(filteredBounties)
//     console.log(filteredBounties)

// })

//post one
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

//delete one
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedItem.firstName} from the database`)
    })
})

//Update one
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId },
        req.body,
        { new: true },
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter
