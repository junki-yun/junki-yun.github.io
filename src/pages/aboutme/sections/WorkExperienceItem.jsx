import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const formatDate = (date) => {
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
};

const WorkExperienceItem = ({ exp }) => {
    const begin = formatDate(exp.startDate);
    const end = exp.current ? '재직중' : formatDate(exp.endDate);
    const period = `${begin} - ${end}`;
    return (
    <Box 
        key={exp.company}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}
    >
        <Box 
            sx={{
                width: '100%',
                height: 4,
                bgcolor: exp.color,
                mb: 1,
            }}
        />
        <Typography variant="body1" sx={{ 
            fontWeight: 'bold', 
            color: exp.color,
        }}>
            {exp.company}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {period}
        </Typography>                       
        <Stack 
            direction="column" 
            spacing={1}
            sx={{ maxWidth: '400px' }}
        >
            {exp.skills.map((skillGroup, groupIndex) => (
                <Stack 
                    key={groupIndex}
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap" 
                    gap={1}
                >
                    {skillGroup.map((Skill, index) => (
                        <Skill key={index} />
                    ))}
                </Stack>
            ))}
        </Stack>
    </Box>);
};

export default WorkExperienceItem;