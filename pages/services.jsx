import { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, Collapse, Divider, IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MainLayout from '../Layouts/MainLayout';
import styles from '../styles/Services.module.css';
import ParticleComponent from '../components/ParticleComponent';

import ContactForm from '../components/ContactForm';
import { Description } from '@mui/icons-material';
import Link from 'next/link';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Services = () => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const focusAreas = [
        {
            title: 'MOBILE',
            description: 'Whether your application is iOS, Android, or cross-platform, we can help you effectively deliver your product to the palm of your users\'s hands.',
            borderColor: 'rgb(251, 177, 60)',
        },
        {
            title: 'WEB',
            description: 'We use the latest technologies combined with a human-centric approach to build efficient and future proof web applications.',
            borderColor: 'rgba(251, 177, 60, .75)',
        },
        {
            title: 'CLOUD',
            description: 'Let us build your dream cloud architecture from the cloud up, using all the major cloud service providers (Google, AWS, and Azure).',
            borderColor: 'rgba(251, 177, 60, .55)',
        },
    ]

    const services = [
        'PoC Development',
        'Front-End Development',
        'Security Best Practices',
        'Re-Engineering',
        'API',
        'Back-End Development',
        'Cloud Migration',
        'System Architecture',
        'Design',
        'Progrssive Web Apps (PWA)',
        'Cross-Platform',
        'MVP', 
    ]

    return (
        <MainLayout title="Services">
            <header
                style={{
                     display: 'flex', justifyContent: 'center', position: 'relative'}}
            >
                <div 
                    style={{ padding: "80px 20px", maxWidth: '700px'}}
                    className={styles.headerTextContainer} 
                >
               

                        <Typography 
                            mb={4}
                            variant="h2"
                            color="#F4F4F9"
                        >
                            SERVICES
                        </Typography>
                        

                        {/* <Typography
                            color="#F4F4F9"
                            variant="body2"
                            gutterBottom
                            
                        >
                            We build <span style={{color: '#FBB13C'}}>custom software</span> to super charge your success, validate your vision and innovate the technology your compnay relies on. 
                        </Typography>  */}
                     
                </div>
                <ParticleComponent />  
            </header>

            <Box py={10} px={4} sx={{display: 'flex', justifyContent: 'center'}}>
                <Box sx={{maxWidth: 800, textAlign: 'center'}}>
                    <Box mb={8}>
                        <Typography className={styles.sectionHeader} variant="h3" sx={{mb: 2, color: '#FBB13C'}}>                        
                            ANIMATING YOUR VISION
                        </Typography> 
                        
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <Typography px={2} color="#757780" sx={{ fontWeight: 'light', maxWidth: 600 }}>
                                We build software to supercharge your success, support your vision, and innovate the technology your company relies on daily.
                            </Typography>
                        </Box>
                    </Box>

                    {
                        focusAreas.map(focusArea => {
                            const {title, description, borderColor } = focusArea;
                            return (
                                <Box 
                                    key={title}
                                    my={4}
                                    p={4}
                                    sx={{
                                        border: `10px solid ${borderColor}`,
                                        borderRadius: 2,
                                        textAlign: 'justify',
                                    }}
                                >
                                    <Typography variant="h4" sx={{color: '#11151C'}} gutterBottom>{title}</Typography>
                                    
                                    <Typography color="#757780" sx={{ fontWeight: 'light' }}>
                                        {description}
                                    </Typography>
                                </Box> 
                            )
                        })
                    }
                    {/* Start HERE */}
                    <Box my={2}>
                        <Box>
                            <Typography mt={6} mb={4} className={styles.sectionHeader} variant="h4" sx={{color: '#11151C'}}>                        
                                ADDITIONAL SERVICES
                            </Typography> 
                        </Box>

                        <Box 
                            sx={{                        
                                display: 'grid',
                                gridTemplateColumns: {xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'},
                                gridTemplateRows: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'},
                                gap: 2,
                                gridAutoRows: '1fr',
                            }}
                        >
                            {
                                services.map(service => {
                                    return (
                                        <Box 
                                            key={service} 
                                            px={3} 
                                            py={2} 
                                            sx={{ 
                                                display: 'flex',
                                                alignItems: 'center',
                                                backgroundColor: '#11151C',
                                                justifyContent: 'center'
                                            }}>
                                            <Typography sx={{color: 'white'}}>{service}</Typography>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                    {/* End HERE */}
                    <Box my={8}>
                        <Typography color="#757780" sx={{ fontWeight: 'light' }}>
                            Have something else in mind? Let&apos;s start a conversation and see how we can prioritize your needs together
                        </Typography>

                        <Link href="/contact" passHref>
                            <Button 
                                sx={{
                                    mt: 3, 
                                    color:"#11151c", 
                                    borderColor: "#11151c", 
                                    borderWidth: 2,
                                    ':hover': {
                                        color: '#11151c',
                                        borderColor: "#11151c",
                                        borderWidth: 2,
                                    }
                                }} 
                                variant="outlined"
                                >
                                Contact Us Now
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            {/* <Box py={10} px={4} sx={{backgroundColor: "#F4F4F9"}}>
                    <div style={{textAlign: 'center', marginBottom: 36}}>
                        <Typography variant="h4" >Core Services</Typography>
                    </div>

                    <Stack display="flex" justifyContent="center" mb={'36px'} direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Card sx={{  maxWidth: 375, border: 'none' }}>
                        <CardContent>
                            <Typography gutterBottom component="div">
                                Web
                            </Typography>
        
                            <Typography variant="body2" color="text.secondary">
                                We use the latest technologies combined with a human-centric approach to build efficient, and future-proof web applications 
                            </Typography>
                        </CardContent>

                    </Card>

                    <Card sx={{  maxWidth: 375  }}>
                        <CardContent>
                            <Typography gutterBottom component="div">
                                Mobile
                            </Typography>
        
                            <Typography variant="body2" color="text.secondary">
                                Whether your application is iOS, Android hybrid or cross-platform, we can help you deliver your product to palm of your user&apos;s hands
                            </Typography>
                        </CardContent>
                    </Card>

                    </Stack>

                    <Stack display="flex" justifyContent="center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 8, md: 16 }}>
                    
                    <div>
                        <ul>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>PoC Development</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Re-Engineering</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Cloud Migration</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>PWA (Progressive Web Apps)</Typography></li>
                        </ul>
                    </div>

                    <Divider orientation="vertical" />

                    <div>
                        <ul>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Front-End Development</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>API</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>System Architecture</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Cross-platform</Typography></li>
                        </ul>
                    </div>

                    <Divider orientation="vertical" />

                    <div>
                        <ul>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Security Best Practices</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Back-end Development</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>Design</Typography></li>
                            <li className={styles.serviceListItem}><Typography color="#757780" sx={{ fontWeight: 'light' }}>MVP</Typography></li>
                        </ul>
                    </div>
                    </Stack>

            </Box>

            <Box py={10} px={4} sx={{display: 'flex', justifyContent: 'center'}}>
                <Box sx={{maxWidth: 600}}>
                    <Typography className={styles.sectionHeader} variant="h3" sx={{mb: 2, color: '#FBB13C', fontWeight: 'bold'}}>                        
                        Obsessed With Your Success
                    </Typography> 
                
                <Typography color="#757780" sx={{ fontWeight: 'light' }}>
                We are fully invested in our clients.  Through our engagment we remain agile and adaptable, prioritizing your needs. Building a strong and sustaianable relationship with our clients is at the core of everything we do.
                </Typography>
                </Box>
            </Box>
             */}
            {/* <Box
                p={{
                    xs: 2,
                    md: 4
                }}
                mb={6}
                sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'

                }}
            >
                <Box sx={{ width: 900 }}>
                    <ContactForm />
                </Box>
            </Box> */}
        </MainLayout>
    )
}

export default Services;
