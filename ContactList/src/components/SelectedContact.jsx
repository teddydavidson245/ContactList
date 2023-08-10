import React, { useState, useEffect } from 'react';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    // Fetch the contact data based on selectedContactId
    // using an API call or data source
    const fetchContactData = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    if (selectedContactId) {
      fetchContactData();
    }
  }, [selectedContactId]);

  return (
    <div>
      {/* Display the contact details */}
      {contact ? (
        <div>
          <h2>Selected Contact</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          {/* Additional contact details */}
        </div>
      ) : (
        <p>No contact selected.</p>
      )}

      {/* Clear selection button */}
      <button onClick={() => setSelectedContactId(null)}>Clear Selection</button>
    </div>
  );
};

export default SelectedContact;
