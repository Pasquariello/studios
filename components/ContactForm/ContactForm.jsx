import { useForm, ValidationError } from '@formspree/react';
import { Button, TextField } from '@mui/material';


const ContactForm = ({ctaText}) => {
  const [state, handleSubmit] = useForm("xqknoqoa");
 
  if (state.succeeded) {
      return <p>Looking forward to working with you!</p>;
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
            <TextField
              label="Email Address"
              id="email"
              type="email" 
              name="email"
              fullWidth
          />
    
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div>

      <TextField
            label="Message Body"
            id="message"
            name="message"
            multiline
            rows={6}
            fullWidth
            margin="dense"

          />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div>
      <Button 
        type="submit" 
        disabled={state.submitting}
        sx={{
        mt: 3, 
        color:"#FBB13C", 
        borderColor: "#FBB13C", 
        ':hover': {
            color: '#11151C',
            borderColor: "#11151C",
            background: "white"
        }
        }} 
        variant="outlined"
    >
        {ctaText || "Connect With Us"}
    </Button>
      </div>
    </form>
  );
}

export default ContactForm;