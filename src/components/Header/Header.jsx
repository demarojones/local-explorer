import React from 'react';
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import {StyledToolbarTitle, useHeaderStyles} from './headerStyles';

const Header = () => {
    const classes = useHeaderStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <StyledToolbarTitle variant="h4">
                    Local Explorer
                </StyledToolbarTitle>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore Local Places
                    </Typography>
                    {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search ...' classes={{root: classes.inputRoot, input: classes.inputInput}} />
                    </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
