import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button, Stack } from '@mui/material';
import { AccountCircle, Business, SettingsSuggest } from '@mui/icons-material';

function MainContainer() {
    return (
        <Container>
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Announcments
                </Typography>
                <Typography variant="body1">
                    This is your app's information and description.
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Student
                        </Typography>
                        <AccountCircle fontSize="large" sx={{ fontSize: '200px' }} />
                        <Stack spacing={2}>
                            <Button variant="contained" color="primary">
                                Register
                            </Button>
                            <Button variant="outlined" color="primary">
                                Login
                            </Button>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Company
                        </Typography>
                        <Business fontSize="large" sx={{ fontSize: '200px' }} />
                        {/* Add your Contractor login/register form here */}
                        <Stack spacing={2}>
                            <Button variant="contained" color="primary">
                                Register
                            </Button>
                            <Button variant="outlined" color="primary">
                                Login
                            </Button>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper sx={{ p: 2, textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Admin
                        </Typography>
                        <SettingsSuggest fontSize="large" sx={{ fontSize: '200px' }} />
                        {/* Add your Citizen login/register form here */}
                        <Stack spacing={2}>
                            <Button variant="contained" color="primary">
                                Register
                            </Button>
                            <Button variant="outlined" color="primary">
                                Login
                            </Button>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainContainer;