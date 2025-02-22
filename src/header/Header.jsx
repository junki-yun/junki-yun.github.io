import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {IconButton} from "@mui/material";

const Header = () => {
    const mail = 'jk6841@gmail.com';
    const linkedIn = 'https://www.linkedin.com/in/jk6841/';
    const github = 'https://github.com/junki-yun';

    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant={"h3"} component={"div"} sx={{ flexGrow: 1, textAlign: "left"}}>
                        윤준기
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton 
                            href={github}
                            target="_blank"
                            color="inherit"
                            size="large"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton 
                            href={linkedIn} 
                            target="_blank"
                            color="inherit"
                            size="large"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton 
                            href={`mailto:${mail}`} 
                            color="inherit"
                            size="large"
                        >
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
};

export default Header;