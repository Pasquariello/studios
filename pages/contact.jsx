import ContactForm from '../components/ContactForm';
import MainLayout from '../Layouts/MainLayout';
import styles from '../styles/Services.module.css';
import ParticleComponent from '../components/ParticleComponent';
import { Box, Button, Card, CardActions, CardContent, Collapse, Divider, IconButton, Stack, Typography } from '@mui/material';

const ContactPage = () => {
    return (
      <MainLayout title="Services">
      <header
          style={{
              // backgroundColor: "#11151C",
              position: 'relative',
               display: 'flex', justifyContent: 'center'}}
      >
          <div 
              style={{ padding: "80px 20px", maxWidth: '700px'}}
          //className={styles.headerTextContainer} 
          >
         

                  <Typography 
                      mb={4}
                      variant="h2"
                      color="#F4F4F9"
                  >
                    Get In Touch
                  </Typography>
                  

                  <Typography
                      color="#F4F4F9"
                      variant="body2"
                      gutterBottom
                      
                  >
                    Ready to <span style={{color: '#FBB13C'}}>start building,</span> looking to plan your next steps, or have any other questions? We are excited to hear from you!  
                  </Typography> 
               
          </div>
          <ParticleComponent/>  
      </header>

          <Box
            py={{
              xs: 8,
              md:14
            }}
            px={{
                xs: 4,
                md: 8
            }}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              // backgroundColor: "#F4F4F9",
              height: '100%',
            }}
            >
              <Box
                sx={{width: 900}}
              >
                <ContactForm ctaText="Send" />
              </Box>
            </Box>
        </MainLayout>
    )
}

export default ContactPage;