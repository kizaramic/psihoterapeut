import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit">
                    Pronadji svog psihoterapeuta
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

