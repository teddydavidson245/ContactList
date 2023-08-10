import { useState } from 'react'
import './App.css'
// import ContactList from '.components/ContactList';
import ContactRow from './components/ContactRow';
import SelectedContact from './components/SelectedContact';
export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        // <ContactList setSelectedContactId={setSelectedContactId} />
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

