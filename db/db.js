const Ticket = require("../models/Tickets")

class DB {
  constructor() {
    this.tickets = []
  }

  /**
   * @param {string} username
   * @param {number} price 
   * 
   */

  createTicket(username, price) {
    const ticket = new Ticket(username, price)

    this.tickets.push(ticket)

    return ticket;
  }

  /**
   * create mulitple tickets
   * 
   * @param {username} username
   * @param {number} price
   * @param {number} quantity
   * 
   * @return {Array[Ticket]} array of tickets
   */

  batchCreateTickets(username, price, quantity) {
    const tickets = []

    for (let i = 0; i < quantity; i++) {
      tickets.push(this.createTicket(username, price))
    }

    return tickets
  }

  /**
   * Delete a ticket
   * @param {string} id
   * 
   * @returns {true}
   */
  deleteTicketById(id) {
    const index = this.tickets.findIndex(id => this.tickets.id === id)

    this.tickets.splice(index, 1);

    return true;

  }

  /**
   * 
   * @param {string} ticket id
   * 
   * @returns {Ticket} ticket with given id
   */
  findTicketById(id) {
    const ticket = this.tickets.filter((id) => this.tickets.id === id)

    return ticket;
  }

  /**
   * 
   * Get all tickets
   */
  getAllTickets() {
    return this.tickets
  }

  /**
   * @param {string} id
   * @param {object} 
   */
  updateTicketById() {

  }

  /**
   * Draw tickets
   * 
   * @param {number} Winners count
   * 
   * @returns {[Tickets]} tickets equal to given count
   */
  draw(winners) {
    const winnersTicketIndex = new Array(winners)
    const randomIndex = Math.floor(Math.random() * this.tickets.length)
    while (winnersTicketIndex.length < winners) {
      if (winnersTicketIndex.indexOf(randomIndex) === -1)
        winnersTicketIndex.push(randomIndex)
    }

    const winnersTickets = []
    for(let index of  winnersTicketIndex){
      winnersTickets.push(winnersTickets[index])
    }

    return winnersTickets;
  }

}

const db = new DB();

module.exports = db;