import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import List from './List';

function Contact(){
    
      const contacts = [
        {
            id: 1,
            name: "Kshama Aditi Reddy Lethakula",
            contact: 8573132222
        },
        {
            id: 2,
            name: "Sonu Reddy",
            contact:8573337333
        },
        {
            id: 3,
            name: "Sanjana Karra",
            contact: 8574392929
        }
        
    ];

    return(
      <div>
      <Navbar/>
      <Content title="Contact" content="This is the contact Page"/>
      {contacts.map(contact => (<List
        id = {contact.id}
        name = {contact.name}
        contact = {contact.contact}
      />))}
      </div>
    )
}

export default Contact