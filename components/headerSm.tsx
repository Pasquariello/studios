import { Typography } from "@mui/material"
import ParticleComponent from "./ParticleComponent"

type HeaderSmProps = {
    title: string; 
    children?: JSX.Element, 
    textAlign?: CanvasTextAlign}

const HeaderSm = ({title, children, textAlign = 'center'}: HeaderSmProps) => {

    const renderBody = (body: JSX.Element) => {
        return (
            <Typography
            color="#F4F4F9"
            variant="body2"
            gutterBottom
            
        >
        {body}
        </Typography> 
        )
    };

    return (
        <header
        style={{
             display: 'flex', justifyContent: 'center', textAlign, position: 'relative'}}
    >
        <div 
            style={{ padding: "80px 20px", maxWidth: '700px'}}
        >
       

                <Typography 
                    mb={4}
                    variant="h2"
                    color="#F4F4F9"
                >
                    {title}
                </Typography>

            
               { children && renderBody(children)}
                
             
        </div>
        <ParticleComponent /> 
    </header>
    )
}

export default HeaderSm;