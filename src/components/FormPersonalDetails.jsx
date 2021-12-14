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

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
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
                        <Typography variant="h6" align="justify">
                            Enter Personal Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container>
                    <TextField
                        placeholder="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                        margin="dense"
                    />
                    <br />
                    <TextField
                        placeholder="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        margin="dense"
                    />
                    <br />
                    <TextField
                        placeholder="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                        margin="dense"
                    />
                    <br />
                    <Button variant="contained" color="secondary" onClick={this.continue}>Continue</Button>
                    <Button variant="contained" color="secondary" onClick={this.back}>Back</Button>
                </Container>
            </ThemeProvider>
        )
    }
}

export default FormPersonalDetails
