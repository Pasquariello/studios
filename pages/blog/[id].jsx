import MainLayout from "../../Layouts/MainLayout";
import { Box, Typography } from "@mui/material";
import ContactForm from '../../components/ContactForm';
import { articles } from '../../utils/blogs';
import { useRouter } from 'next/router'

const BlogPost = () => {

    const router = useRouter();
    const { id } = router.query;
    
    const blog  = articles.find(a => a.id === Number(id));

    return (
        <MainLayout>
            <Box 
                id="postContainer"
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
                blog?.body && (
                    <Box 
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
                        dangerouslySetInnerHTML={{ __html:  blog.body}}
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

export default BlogPost;