import { Box, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useState } from "react";

const RecentPosts = () => {
    const [posts] = useState([
        {
            id: 1,
            title: "Sample Blog Post",
            summary: "This is a sample blog post summary...",
            date: "2024-01-01"
        }
    ]);

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 4 }}>
                최근 글
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {posts.map(post => (
                    <Card key={post.id}>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="h6">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                    {post.date}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    {post.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default RecentPosts; 