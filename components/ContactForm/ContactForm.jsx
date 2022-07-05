import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqknoqoa");
 
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
}

export default ContactForm;