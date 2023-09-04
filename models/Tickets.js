const shortid = require("shortid")

/**
 * @param {string} username
 * @param {number} price
 * 
 * @returns {Ticket}
 * */ 

class Ticket{
  constructors(username, price){
    this.id = shortid.generate()
    this.username = username
    this.price = price
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}

module.exports = Ticket