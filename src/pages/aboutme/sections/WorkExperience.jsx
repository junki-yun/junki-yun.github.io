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
import Kotlin from "../../../components/skills/Kotlin";
import GithubActions from "../../../components/skills/GithubActions";
import WorkExperienceItem from "./WorkExperienceItem";

const now = new Date();

const baseData = [
    {
        company: "NHN Cloud",
        startDate: new Date('2022-01-03'),
        endDate: new Date('2025-02-04'),        
        skills: [
            [Java, TypeScript, Go],
            [SpringBoot, Gradle, React, Vue2],
            [MySQL, Redis, Kafka],
            [Airflow],
            [Docker, Kubernetes],
            [Jenkins]
        ],
        color: 'primary.main',
    },
    {
        company: "위대한상상(요기요)",
        startDate: new Date('2025-03-04'),
        current: true,
        endDate: now,
        skills: [
            [Kotlin],
            [SpringBoot, Gradle],
            [Docker, Kubernetes],
            [GithubActions]
        ],
        color: 'secondary.main'
    }
];

const WorkExperience = ({ id }) => {
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
            
            <Stack spacing={4}>
                {baseData.map((exp) => (<WorkExperienceItem exp={exp} key={exp.company} />))}
            </Stack>
        </Box>
    );
};

export default WorkExperience;