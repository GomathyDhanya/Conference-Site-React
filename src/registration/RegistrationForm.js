import React, { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [paperTitle, setPaperTitle] = useState('');
  const [paperAbstract, setPaperAbstract] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className='rform'>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor="institution">Institution</label>
      <input
        type="text"
        id="institution"
        value={institution}
        onChange={(event) => setInstitution(event.target.value)}
        required
      />
      <label htmlFor="paperTitle">Paper Title</label>
      <input
        type="text"
        id="paperTitle"
        value={paperTitle}
        onChange={(event) => setPaperTitle(event.target.value)}
        required
      />
      <label htmlFor="paperAbstract">Paper Abstract</label>
      <textarea
        id="paperAbstract"
        value={paperAbstract}
        onChange={(event) => setPaperAbstract(event.target.value)}
        required
      />
      <button type="submit" class="regsub">Submit</button>
    </form>
  );
}

export default RegistrationForm;
