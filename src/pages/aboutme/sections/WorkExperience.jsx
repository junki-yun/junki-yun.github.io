import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useMemo } from 'react';
import Java from '../../../components/skills/Java';
import SpringBoot from '../../../components/skills/SpringBoot';
import MySQL from '../../../components/skills/MySQL';
import Redis from '../../../components/skills/Redis';
import Kafka from '../../../components/skills/Kafka';
import Docker from '../../../components/skills/Docker';
import Kubernetes from '../../../components/skills/Kubernetes';
import TypeScript from '../../../components/skills/TypeScript';
import Go from "../../../components/skills/Go";
import Jenkins from "../../../components/skills/Jenkins";
import Gradle from "../../../components/skills/Gradle";
import Airflow from "../../../components/skills/Airflow";
import Vue2 from "../../../components/skills/Vue2";
import React from "../../../components/skills/React";
const WorkExperience = ({ id }) => {
    const experiences = useMemo(() => {
        const baseData = [
            {
                company: "NHN Cloud",
                startDate: new Date('2022-01-03'),
                endDate: new Date('2025-02-04'),
                color: 'primary.main'
            }
        ];

        const now = new Date();
        const firstStartDate = baseData[0].startDate;
        const lastEndDate = baseData[0].endDate; // NHN Cloud의 종료일

        const totalDuration = lastEndDate.getTime() - firstStartDate.getTime();

        return baseData.map((exp, index) => {
            const startDuration = exp.startDate.getTime() - firstStartDate.getTime();
            const start = (startDuration / totalDuration) * 100;

            if (exp.isFuture) {
                return {
                    ...exp,
                    period: "2025.03 - (예정)",
                    start,
                    width: 'auto'
                };
            }

            const duration = exp.endDate.getTime() - exp.startDate.getTime();
            const width = (duration / totalDuration) * 100;
            
            const period = `${exp.startDate.getFullYear()}.${String(exp.startDate.getMonth() + 1).padStart(2, '0')} - ${exp.endDate.getFullYear()}.${String(exp.endDate.getMonth() + 1).padStart(2, '0')}`;

            return {
                ...exp,
                period,
                start,
                width: `${width}%`
            };
        });
    }, []);

    const skills = {
        "NHN Cloud": [
            [Java, TypeScript, Go],
            [SpringBoot, Gradle, React, Vue2],
            [MySQL, Redis, Kafka],
            [Airflow],
            [Docker, Kubernetes],
            [Jenkins]
        ]
    };

    return (
        <Box 
            id={id}
            sx={{ 
                flexGrow: 1,
                bgcolor: 'rgba(76, 175, 80, 0.12)',
                borderRadius: 4,
                py: 4,
                px: 2,
            }}
        >
            <Typography variant={"h4"} sx={{ mb: 4, pl: 2 }}>경력</Typography>
            
            <Box sx={{ position: 'relative', minHeight: 250 }}>
                {experiences.map((exp) => (
                    <Box 
                        key={exp.company}
                        sx={{
                            position: 'absolute',
                            left: exp.isFuture ? 'auto' : `${exp.start}%`,
                            right: exp.isFuture ? 0 : 'auto',
                            width: exp.width,
                            top: 0,
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
                                opacity: exp.isFuture ? 0.5 : 1,
                            }}
                        />
                        <Typography variant="body1" sx={{ 
                            fontWeight: 'bold', 
                            color: exp.color,
                            opacity: exp.isFuture ? 0.5 : 1,
                        }}>
                            {exp.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {exp.period}
                        </Typography>
                        
                        {skills[exp.company] && (
                            <Stack 
                                direction="column" 
                                spacing={1}
                                sx={{ maxWidth: '400px' }}
                            >
                                {skills[exp.company].map((skillGroup, groupIndex) => (
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
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default WorkExperience;