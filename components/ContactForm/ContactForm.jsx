import { useForm, ValidationError } from '@formspree/react';
import { Button, TextField } from '@mui/material';


const ContactForm = ({ctaText}) => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_EMAIL_KEY);
 
  if (state.succeeded) {
      return (
        <div>
          <p style={{color: '#39DB80'}}><b>Yay!</b></p>
          <p>Your message was succcessfully delivered</p>
          <p>We are so excited for the opportunity to work with you and will be in contact with you shortly.</p>
        </div>
      )
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