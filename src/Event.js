import React from 'react';
import {CardActions, Typography, CardContent, Button, Card} from "@mui/material"


const Event = ({event}) => (

    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Start:
        <li key={event.start}>{Date(event.start).toString()}</li>
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        End:
        <li key={event.end}>{Date(event.end).toString()}</li>
      </Typography>
    </CardContent>
  </Card>

)

export default Event;