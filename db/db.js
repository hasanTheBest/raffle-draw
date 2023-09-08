const Ticket = require("../models/Tickets");

class DB {
  constructor() {
    this.tickets = [];
  }

  /**
   * Create a ticket
   * @param {string} username
   * @param {number} price
   *
   */

  createTicket(username, price) {
    const ticket = new Ticket(username, price);

    this.tickets.push(ticket);

    return ticket;
  }

  /**
   * create multiple tickets
   *
   * @param {username} username
   * @param {number} price
   * @param {number} quantity
   *
   * @return {[Ticket]} array of tickets
   */

  batchCreateTickets(username, price, quantity) {
    const tickets = [];

    for (let i = 0; i < quantity; i++) {
      tickets.push(this.createTicket(username, price));
    }

    return tickets;
  }

  /**
   * Get all tickets by
   *
   * @return {[Ticket]} An array of ticket objects
   */

  getAllTickets() {
    return this.tickets;
  }

  /**
   * Delete a ticket
   * @param {string} id
   *
   * @returns {true}
   */
  deleteTicketById(id) {
    const index = this.tickets.findIndex((id) => this.tickets.id === id);

    this.tickets.splice(index, 1);

    return true;
  }

  /**
   * Update a ticket
   * @param {string} ticket id
   * @param {object} ticket body
   *
   * @return {boolean} true
   *
   */

  updateTicketById(id, ticketBody) {}

  /**
   * Find a ticket by id
   * @param {string} ticket id
   *
   * @returns {Ticket} ticket with given id
   */
  findTicketById(id) {
    const ticket = this.tickets.filter((id) => this.tickets.id === id);

    return ticket;
  }

  /**
   * Draw raffle
   *
   * @param {number} winners count
   *
   * @returns {[Ticket]} tickets equal to given count
   */
  draw(winners) {
    const winnersTicketIndex = new Array(winners);

    const getWinnerIndex = () => {
      const randomIndex = Math.floor(Math.random() * this.tickets.length);
      console.log("randomIndex", randomIndex);

      while (winnersTicketIndex.length < winners) {
        if (winnersTicketIndex.indexOf(randomIndex) === -1)
          winnersTicketIndex.push(randomIndex);
        getWinnerIndex();
      }
    };

    getWinnerIndex();

    console.log("winnersTicketIndex", winnersTicketIndex);

    const winnersTickets = [];
    for (let index of winnersTicketIndex) {
      winnersTickets.push(this.tickets[index]);
    }

    return winnersTickets;
  }
}

const db = new DB();

module.exports = db;
