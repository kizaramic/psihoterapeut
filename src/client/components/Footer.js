import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'



export default ({ Grad, list, onSelect }) => {
    const index = list
        ? Grad.findIndex(group => group === list) + 1
        : 0

    const onIndexSelect = ((e, index) => onSelect(index === 0 ? '' : Grad[index - 1]))


    return <Paper>
        <Tabs
            value={index}
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="All" />
            {Grad.map(list =>
                <Tab key={list} label={list} />
            )}
        </Tabs>
    </Paper>

}
