import type { NextPage } from 'next'
import { Box, Typography } from '@mui/material';
import MainLayout from '../Layouts/MainLayout';
import Image from 'next/image'
import styles from '../styles/About.module.css';
import ParticleComponent from '../components/ParticleComponent';


const About: NextPage = () => {
    return (
        <MainLayout title="About Us">
            <header className={styles.header}>

            {/* Column 1 */}
            <div style={{ flex: 1 }}>
              
                <div className={styles.particleContainer}>
                    <ParticleComponent height='500px'/>
                </div>

                <div className={styles.headerContentWrapper}>
                    <div className={styles.headerTextContainer}>
                        <Typography 
                            mb={4}
                            variant="h2"
                        >
                            Let Us Bring Your Technology Needs To Life
                        </Typography>
                    

                        <Typography>
                            By utilizing the latest and most established technology tecnical can super charge your company to reach your fullest potential
                        </Typography>
                    </div>
                </div>
            </div>

            {/* Column 2 */}

            <div className={styles.headerImageWrapper}>
                <Image
                    alt=""
                    src="/static/images/office.jpg"
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            
        
            </header>

            {/* section start*/}
                <Box px={5} py={10} className={styles.mainTagLineContainer}>
                    <div style={{maxWidth: 700}}>
                    <Typography mb={4}>
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

                <Typography mb={4}>
                    SERVICE PLANS
                </Typography>

            </section>
            {/* section end */}


        </MainLayout>
    )
}

export default About;
