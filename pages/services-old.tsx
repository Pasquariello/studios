import type { NextPage } from 'next'
import { Box, Button, Typography } from '@mui/material';
import MainLayout from '../Layouts/MainLayout';
import Image from 'next/image'
import styles from '../styles/Services.module.css';
import ParticleComponent from '../components/ParticleComponent';


const Services: NextPage = () => {
    return (
        <MainLayout title="Services">
            <header className={styles.header}>

            {/* Column 1 */}
            <div style={{ flex: 1 }}>
              
                <div className={styles.particleContainer}>
                    <ParticleComponent/>
                </div>

                <div className={styles.headerContentWrapper}>
                    <div className={styles.headerTextContainer}>
                        <Typography 
                            mb={4}
                            variant="h2"
                        >
                            Bringing Your Technology Needs To Life
                        </Typography>
                    

                        <Typography>
                            By utilizing the latest and most established technology Cascadian can super charge your company to reach its fullest potential
                        </Typography>
                    </div>
                </div>
            </div>

            {/* Column 2 */}

            {/* <div className={styles.headerImageWrapper}>
                <Image
                    alt=""
                    src="/static/images/office.jpg"
                    layout='fill'
                    objectFit='cover'
                />
            </div> */}
            
        
            </header>

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
                </Box>        
            {/* section end */}

            {/* section start*/}
            <section>
                <Typography 
                    variant="h4"
                    mb={4} 
                    p={2}
                    sx={{
                        background: 'linear-gradient(to right, #F24236, #0197F6)',
                        display: 'table',
                        color: 'white',
                    }}
                >
                    Services:
                </Typography>

                <div style={{maxWidth: 700}}>
                    <Typography variant="h5" pb={4}>Dream, Plan, Build</Typography>
                    <Typography>Sounds straight forward right? You Dream it up, we help you plan, and then we build it together. <br/>
                       Our team of expert designers, product owners and developers will team up with you to help build out the application / technology that you want. Whether you need to modernize your existing products or innovate new technologies, we are here for you.
                    </Typography>
                    <Button>Lets get started</Button>


                </div>

                    <br/>
                    <br/>
                    <br/>

                <div style={{maxWidth: 700}}>
                    <Typography variant="h5" pb={4}>CI/CD - (Continuous Innovation - Continuois Development)</Typography>
                    <Typography>
                        Looking for full and lasting support? Awesome! We love building lasting relationships that will serve you best. With this service we dedicate a resources to bolster your products, with continued support and managed services.
                    </Typography>
                    <Button>Lets get started</Button>
                </div>

            </section>
            {/* section end */}


        </MainLayout>
    )
}

export default Services;
