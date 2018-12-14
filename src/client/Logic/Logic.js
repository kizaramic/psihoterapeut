import React, { Fragment } from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    Paper: {
        padding: 20, margin: 10, height: 600, overflowY: "auto"
    }
}

export default ({
    therapists,
    list,
    onSelect,
    therapist: {
        Grad = "Welcome",
        Obrazovanje = "Izaberite psihoterapeuta sa Vaše leve strane da biste videli detaljniji opis.",
        Telefon,
        email
    }
}) =>
    <Grid container >
        <Grid item sm>
            <Paper style={styles.Paper}>
                {therapists.map(([group, therapists]) =>
                    !list || list === group
                        ? <Fragment>
                            <Typography
                                variant="headline"
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {therapists.map(({ Ime }) =>
                                    <ListItem button>
                                        <ListItemText primary={Ime} />
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="display2"
                >
                    {Grad}
                </Typography>
                <Typography
                    variant="display"
                    style={{ marginTop: 20 }}
                >
                    {Obrazovanje}
                </Typography>
            </Paper>
        </Grid>
    </Grid >



