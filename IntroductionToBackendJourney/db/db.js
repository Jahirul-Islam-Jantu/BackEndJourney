const Ticket = require("../models/ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
      return ticket;
    }
  }

  //return all tickets
  find() {
    return this.tickets;
  }

  /**
   * find by ticket id
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       * @returns {Ticket}
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }
  /**
   *
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUserName(username) {
    const tickets = this.tickets.filter(
      /**
       *
       * @param {Ticket} ticket
       * @returns
       */
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   *
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();

    return ticket;
  }
  /**
   *
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
   let winnerIndexes = new Array(winnerCount)
   let index = 0
   while(index<winnerCount){
    let winnerIndex = Math.floor(Math.random() * this.tickets.length)
    console.log('winner index', winnerIndex);
    if (!winnerIndexes.includes(winnerIndex)){
      winnerIndexes[index++] = winnerIndex
      continue
    }
   }
    }

    const winners = indexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();    
module.exports = myDB;
