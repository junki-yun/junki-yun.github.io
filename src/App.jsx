import Box from '@mui/material/Box';
import { Container, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import AboutMe from './pages/aboutme';

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Tabs value={currentTab} onChange={handleTabChange} sx={{ mb: 4 }}>
          <Tab label="About Me" />
        </Tabs>

        {currentTab === 0 && <AboutMe />}
      </Container>
    </Box>
  );
}

export default App;
