import { useState } from 'react';
import { Box, Pagination, Typography } from "@mui/material";
import MainLayout from "../../Layouts/MainLayout";
import { PRIMARY_TYPOGRAPHY } from '../../styles/style-constants';
import { useRouter } from 'next/router'
import ParticleComponent from '../../components/ParticleComponent';

import { articles } from '../../utils/blogs';


const Blog = () => {
    const router = useRouter();

    const displayCount = 10;
    const pageCount = Math.ceil(articles.length / displayCount);

    const handleCurrentPageDisplay = ({ list, currentPage, displayCount }: any) => {
        let start = (currentPage - 1) *  displayCount;
        let end = start + displayCount;

        return list.slice(start, end);
    }

    const [ currentPage, setCurrentPage ] = useState(1);
    const initData = handleCurrentPageDisplay({list: articles, currentPage, displayCount});
    const [displayData, setDisplayData] = useState(initData);



    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);

        const currentList = handleCurrentPageDisplay({list: articles, currentPage: value, displayCount});
        setDisplayData(currentList)
      };


    const renderArticle = (article: any) => {
        const { id, title, preview, link } = article

        const handlePush = () => {
            link ? window.location.href = link :  router.push(`/blog/${id}`); 
        }

        return (
            <Box key={id} style={{cursor: 'pointer'}} sx={{border: '1px solid #ddd', my: 4, p: 2}} onClick={handlePush}>
                <Box sx={{
                    display: {
                        sm: 'flex',
                    },
                    justifyContent: 'space-between'
                }}>
                    <h3>{title}</h3>
                </Box>
                
                 {preview && (
                    <Box sx={{color: PRIMARY_TYPOGRAPHY}}>
                        {`${preview.slice(0, 245)}...`}
                    </Box>
                 )}
                {/* <Box sx={{color: PRIMARY_TYPOGRAPHY}} dangerouslySetInnerHTML={{ __html: `${preview.slice(0, 245)}&hellip;` }}/> */}
            </Box>
        )
    }

    const renderArticleList = () => (
        displayData.map((article: any, i: number) => {
            return (
                renderArticle(article)
            );
        })
    );

    const renderPageCount = () => pageCount > 1 &&  <Pagination count={pageCount} variant="outlined" page={currentPage} onChange={handleChange}  />

    return (
        <MainLayout>
         <header
                style={{
                     display: 'flex', justifyContent: 'center', textAlign: 'center', position: 'relative'}}
            >
                <div 
                    style={{ padding: "80px 20px", maxWidth: '700px'}}
                >
               

                        <Typography 
                            mb={4}
                            variant="h2"
                            color="#F4F4F9"
                        >
                            What We&apos;ve Been Talking About
                        </Typography>
                        

                        {/* <Typography
                            color="#F4F4F9"
                            variant="body2"
                            gutterBottom
                            
                        >
                            Our team has been thinking up a few ideas that we are excited to share with you!
                        </Typography>  */}
                     
                </div>
                <ParticleComponent /> 
            </header>
            <Box sx={{
                my: 4,
                px: {
                    xs: 4,
                    md: 16,
                } 
            }}>
                {renderArticleList()}
                {renderPageCount()}
            </Box>

        </MainLayout>
    )
}

export default Blog;