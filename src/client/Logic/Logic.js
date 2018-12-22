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
        Ime = "Dobrodošli",
        Grad = "",
        Obrazovanje = "Izaberite psihoterapeuta sa Vaše leve strane da biste videli detaljniji opis.",
        Telefon = "",
        email = ""
    }
}) => (
        <Grid container >
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {therapists.map(([group, therapists]) =>
                        !list || list === group
                            ? <Fragment key={group}>
                                <Typography
                                    variant="headline"
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {therapists.map(({ Ime, Grad }) =>
                                        <ListItem button>
                                            <ListItemText
                                                primary={Ime}
                                                onClick={() => onSelect(Ime)} />
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
                        {Ime}
                    </Typography>
                    <Typography
                        variant="display"
                        style={{ marginTop: 20 }}
                    >
                        {Grad}, {Obrazovanje}, {Telefon} ,{email}
                    </Typography>
                </Paper>
            </Grid>
        </Grid >

    )

