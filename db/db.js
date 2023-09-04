const Ticket = require("../models/Tickets")

class DB{
  constructor(){
    this.tickets = []
  }

  /**
   * @param {string} username
   * @param {number} price 
   * 
   */

  createTicket(username, price){
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

  batchCreateTickets(username, price, quantity){
    const tickets = []

    for(let i=0; i<quantity; i++){
      tickets.push(this.createTicket(username, price))
    }

    return tickets
  }

  /**
   * Delete a ticket
   * 
   * 
   */
  deleteTicketById(){

  }

  /**
   * 
   * 
   */
  findTicketById(){

  }

  /**
   * 
   * 
   */
  getAllTickets(){}

  /**
   * 
   */
  draw(){
    
  }

}

const db = new DB();

module.exports = db;