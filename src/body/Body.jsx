import Box from "@mui/material/Box";
import Education from "../pages/aboutme/Education.jsx";
import WorkExperience from "../pages/aboutme/sections/WorkExperience.jsx";

const Body = () => {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
            }}
        >
            <WorkExperience id="work-experience"/>
            <Education/>
        </Box>
    );
};

export default Body;