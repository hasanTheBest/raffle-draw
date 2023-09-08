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
   * @param {string} id ticket id
   *
   * @returns {Boolean} true or false
   */
  deleteTicketById(id) {
    const index = this.tickets.findIndex((ticket) => ticket.id === id);

    this.tickets.splice(index, 1);

    return true;
  }

  /**
   * Update a ticket
   * @param {string} id ticket id
   * @param {object} ticketBody ticket properties need to be updated
   *
   * @return {Ticket} Ticket object with updated property
   *
   */

  updateTicketById(id, ticketBody) {
    const ticketIndex = this.tickets.findIndex((ticket) => ticket.id === id);
    const ticket = this.tickets[ticketIndex];

    const updatedTicket = { ...ticket, ...ticketBody };

    this.tickets[ticketIndex] = updatedTicket;

    return updatedTicket;
  }

  /**
   * Find a ticket by id
   * @param {string} id ticket id
   *
   * @returns {Ticket} ticket with given id
   */
  findTicketById(id) {
    const ticket = this.tickets.filter((ticket) => ticket.id === id);

    return ticket;
  }

  /**
   * Draw raffle
   *
   * @param {number} winners number of winners
   *
   * @returns {[Ticket]} array of tickets equal to given count
   */
  draw(winners) {
    const winnersTicketIndex = new Array();

    while (winnersTicketIndex.length < winners) {
      const randomIndex = Math.floor(Math.random() * this.tickets.length);
      if (winnersTicketIndex.indexOf(randomIndex) === -1)
        winnersTicketIndex.push(randomIndex);
    }

    const winnersTickets = [];
    for (let index of winnersTicketIndex) {
      winnersTickets.push(this.tickets[index]);
    }

    return winnersTickets;
  }
}

const db = new DB();

module.exports = db;
