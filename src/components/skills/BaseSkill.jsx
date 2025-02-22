import { Chip } from "@mui/material";

const BaseSkill = ({ name, color, docsUrl }) => {
    return (
        <Chip 
            label={name}
            size="small"
            sx={{
                bgcolor: color,
                color: 'white',
                opacity: 0.8,
                '&:hover': {
                    opacity: 1,
                }
            }}
            onClick={() => window.open(docsUrl, '_blank')}
            clickable
        />
    );
};

export default BaseSkill; 