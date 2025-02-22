import Box from "@mui/material/Box";
import Education from "./sections/Education.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";
import Header from "./sections/Header.jsx";

const AboutMe = () => {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
            }}
        >
            <Header />
            <WorkExperience id="work-experience"/>
            <Education/>
        </Box>
    );
};

export default AboutMe; 