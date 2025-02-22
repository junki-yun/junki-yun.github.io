import Box from "@mui/material/Box";
import Header from "./header/Header.jsx";
import { Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import AboutMe from "./pages/aboutme";
import Blog from "./pages/blog";

function App() {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <Box>
            <Header/>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Tabs 
                    value={currentTab} 
                    onChange={handleTabChange}
                    sx={{ mb: 4 }}
                >
                    <Tab label="About Me" />
                    <Tab label="Blog" />
                </Tabs>

                {currentTab === 0 && <AboutMe />}
                {currentTab === 1 && <Blog />}
            </Container>
        </Box>
    );
}

export default App;
