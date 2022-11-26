import React from 'react';
import {CardActions, Typography, CardContent, Button, Card} from "@mui/material"


const Event = ({event}) => (

    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Start:
        <li key={event.start}>{event.start}</li>
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        End:
        <li key={event.end}>{event.end}</li>
      </Typography>
    </CardContent>
  </Card>

)

export default Event;