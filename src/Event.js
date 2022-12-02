import React from 'react';
import { CardActions, Typography, CardContent, Button, Card } from "@mui/material"
import {deleteEvent} from './utils.js';

/**
 * Event Class that creates the display UI of each individual event. Displays the Start, End, Title, and Description.
 * @type Class
 */

/** 
 * @return {event} Generates the event tile card for the user once they input the appropiate information through the Modal on the site.
 * @param event - Event object (includes Start, End, Title, and Description)
 * @param refetch - Function parameter, used to refresh the page automatically when an event is deleted.
 * @type {class}
 * @constant
 */
const Event = ({ event, refetch }) => (

  <div className='centered'><Card variant="outlined" sx={{ minWidth: 275, maxWidth: 500, border: 1, borderColor: 'error.dark' }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <h2 key={event.title}><b>TITLE:</b> {event.title}</h2>
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
        <div key={event.description}><b>DESCRIPTION:</b> {event.description}</div>
      </Typography>

      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
        <div key={event.start}><b>START:</b> {new Date(event.start).toString()}</div>
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
        <div key={event.end}><b>END:</b> {new Date(event.end).toString()}</div>
      </Typography>
      <Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={async () => {
        await deleteEvent('/event', event.id );
        await refetch();
      }} data-cy='delete'>Delete</Button>
    </CardContent>
  </Card></div>

)

export default Event;