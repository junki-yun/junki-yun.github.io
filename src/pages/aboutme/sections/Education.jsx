import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Education = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'rgba(76, 175, 80, 0.12)',
        borderRadius: 4,
        py: 4,
        px: 2,
      }}
    >
      <Typography variant={'h4'} sx={{ mb: 4, pl: 2 }}>
        학력
      </Typography>
      <List>
        <ListItem sx={{ px: 2 }}>
          <ListItemIcon sx={{ minWidth: 24 }}>
            <FiberManualRecordIcon sx={{ fontSize: 8 }} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant={'h6'}>KAIST 전기및전자공학부 학사</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Education;
