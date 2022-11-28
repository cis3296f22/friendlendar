import React from 'react';
import {CardActions, Typography, CardContent, Button, Card} from "@mui/material"


const Event = ({event}) => (

    <div className='centered'><Card variant="outlined" sx={{minWidth: 275, maxWidth: 500, border: 1, borderColor: 'error.dark' }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Start:
                <li key={event.start}>{new Date(event.start).toString()}</li>
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                End:
                <li key={event.end}>{new Date(event.end).toString()}</li>
            </Typography>
        </CardContent>
    </Card></div>

)

export default Event;