import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import MyContext from '../ContextApi/MyContext';
export default function TicketMessages() {
  const user = JSON.parse(sessionStorage.getItem("User"))
  const {allMessages} = useContext(MyContext)

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-PK', {
      timeZone: 'Asia/Karachi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };
  return (
    <div>
      {allMessages && allMessages.filter(message => message.userId._id === user._id).reverse().map((message) => {
        return <div>
          <div className="card mt-2" style={{ border: "1px solid #fe5638" }}>
            <div className="card-body">
              <p >Your message against id <strong style={{ color: "#fe5638" }}> {message.ticketId && message.ticketId.ticketId}</strong></p>
              <p><strong style={{ color: "#fe5638" }}> Subject :</strong> {message.ticketId && message.ticketId.subject}</p>
              <p>{message.message}</p>
              <p style={{fontSize:"11px"}}>{formatDate(message.createAt)}</p>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}
