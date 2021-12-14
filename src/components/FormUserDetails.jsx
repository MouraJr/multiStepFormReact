import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <ThemeProvider >
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton edge="start" className="" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="">
                            Enter User Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container>
                    <TextField
                        placeholder="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        margin="dense"
                    />
                    <br />
                    <TextField
                        placeholder="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.firstName}
                        margin="dense"
                    />
                    <br />
                    <TextField
                        placeholder="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        margin="dense"
                    />
                    <br />
                    <Button variant="contained" color="secondary" onClick={this.continue}>Continue</Button>
                </Container>
            </ThemeProvider>
        )
    }
}

export default FormUserDetails
