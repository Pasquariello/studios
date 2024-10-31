import MainLayout from "../../Layouts/MainLayout";
import { Box, Typography } from "@mui/material";
import ContactForm from '../../components/ContactForm';
import { solutions } from '../../utils/solutions';
import { useRouter } from 'next/router'

const SolutionPost = () => {

    const router = useRouter();
    const { id } = router.query;
    
    const solution  = solutions.find(a => a.id === Number(id));

    return (
        <MainLayout>
            <Box 
                sx={{ 
                    pt: 12, 
                    gap: 8, 
                    flex: 1,
                    px: {
                        xs: 8,
                        md: 24,
                        lg: 48,
                    }, 
                    // display: 'flex',
                    flex: 1,
                }}
            >

            {
                solution?.body && (
                    <Box 
                        id="postContainer"
                        sx={{
                            fontSize: '1.25em',
                            flex: 1,
                            lineHeight: 1.55,
                            px: {
                                // xs: 8,
                                // md: 24,
                                // lg: 48,
                            },
                        }}
                        dangerouslySetInnerHTML={{ __html:  solution.body}}
                    />
                )
            }
            </Box>
            <Box
                py={{
                xs: 8,
                md: 8//14
                }}
                px={{
                    xs: 4,
                    md: 8
                }}
                sx={{
                width: '100%',
                height: '100%',
                }}
                >  
                <Typography variant="h5" gutterBottom>Connect with us now to get started...</Typography>
              
                <ContactForm ctaText="Send" />
                
            </Box>
        </MainLayout>
    )
}

export default SolutionPost;