import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {


  return (
  <>
    <div className='contact-form'>
      <h1>Connect<br></br> with us</h1>
      <form>
        <label>
          <input type='text' name='name' placeholder='Name' />
        </label>
        <label>
          <input type='email' name='email' placeholder='Email' />
        </label>
        <label>
          <textarea name='message' placeholder='Message'></textarea>
        </label>
        <input type='submit' value='Send Message' />
      </form>
    </div>

    <div className='contact-form-desktop'>
      <h1>Connect<br></br> with us</h1>
      <form >
        <label>
          <input type='text' name='name' placeholder='Name' />
        </label>
        <label>
          <input type='email' name='email' placeholder='Email' />
        </label>
        <label>
          <textarea name='message' placeholder='Message'></textarea>
        </label>
        <input type='submit' value='Send Message' />
      </form>
    </div>

  </>
    
  );
}

export default ContactForm;
