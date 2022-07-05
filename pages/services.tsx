import type { NextPage } from 'next'
import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import MainLayout from '../Layouts/MainLayout';
import Image from 'next/image'
import styles from '../styles/Services.module.css';
import ParticleComponent from '../components/ParticleComponent';

import ContactForm from '../components/ContactForm';


const Services: NextPage = () => {
    return (
        <MainLayout title="Services">
            <header
                style={{
                    backgroundColor: "#11151C", display: 'flex', justifyContent: 'center'}}
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
                            Animating Your Vision
                        </Typography>
                        

                        <Typography
                            color="#F4F4F9"
                            variant="body2"
                            gutterBottom
                            
                        >
                            We build <span style={{color: '#FBB13C'}}>custom software</span> to super charge your success, validate your vision and innovate the technology your compnay relies on. 
                        </Typography> 
                     
                </div>
            </header>

            <Box py={10} px={4} sx={{backgroundColor: "#F4F4F9"}}>
                    <Typography variant="h4">Core Services</Typography>

                    <ul>
                        <li>PoC Development</li>
                        <li>Re-Engineering</li>
                        <li>Cloud Migration</li>
                        <li>PWA (Progressive Web Apps)</li>

                    </ul>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Card sx={{  maxWidth: 345  }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Web App Development
                            </Typography>
        
                            <Typography variant="body2" color="text.secondary">
                                We use the latest technologies combined with a human-centric approach to build efficient, and future-proof web applications 
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{  maxWidth: 345  }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mobile App Development
                            </Typography>
        
                            <Typography variant="body2" color="text.secondary">
                                Whether your application is iOS, Android or device agnostic, we can help you deliver your product to palm of your user&apos;s hands
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{  maxWidth: 345  }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Web App Development
                            </Typography>
        
                            <Typography variant="body2" color="text.secondary">
                                We use the latest technologies combined with a human-centric approach to build efficient, future-proof and web applications 
                            </Typography>
                        </CardContent>
                    </Card>

                    </Stack>

            </Box>

            {/* section start*/}
                <Box px={5} py={16} className={styles.mainTagLineContainer}>
                    <div style={{maxWidth: 700}}>
                    <Typography mb={4} variant="h4">
                        We Are Obsessed With Your Success
                    </Typography>

                    {/* We are obessed with building scalable, functional technology  */}
                    <Typography>
                        We are fully invested in our clients.  Through our engagment we remain agile and adaptable, prioritizing your needs. Building a strong and sustaianable relationship with our clients is at the core of everything we do.
                    </Typography>
                    </div>

                    {/* <ContactForm /> */}
                </Box>        
            {/* section end */}

            {/* section start*/}
            <section>
              

            </section>
            {/* section end */}


        </MainLayout>
    )
}

export default Services;
