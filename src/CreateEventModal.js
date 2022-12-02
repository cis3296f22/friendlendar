import './App.css';
import React from 'react'
import {CardActions, Typography, CardContent, Button, Modal, Card, FormControl, TextField, Box} from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {post} from './utils.js'

/**
 * Modal that pops up on the website when a date is selected. The user can enter in information such as Start date, End date, Title, and Description.
 * @type Class
 */


/** 
 * @return - Generates the event creation tile card for the user once they click a date on the calendar the modal pops up and allows the user to input event information such as (Start, End, Title, and Description)
 * @param props - Parameter that tells the modal when a date has been clicked in order to open the modal.
 * @type Function/Class
 */
function CreateEventModal(props) {

    /**
     * @type Variable and set function
     * @constant
     * startDate stores the start date when an event is created. It's coinciding function setStartDate sets the variable when called.
     */
    const [startDate, setStartDate] = React.useState(null);
    /**
     * @type Variable and set function
     * @constant
     * endDate stores the end date when an event is created. It's coinciding function setEndDate sets the variable when called.
     */
    const [endDate, setEndDate] = React.useState(null);
    /**
     * @type Variable and set function
     * @constant
     * title stores the title when an event is created. It's coinciding function setTitle sets the variable when called.
     */
    const [title, setTitle] = React.useState(null);
    /**
     * @type Variable and set function
     * @constant
     * description stores the description when an event is created. It's coinciding function setDesc sets the variable when called.
     */
    const [description, setDesc] = React.useState(null);


    return(        
        <div>
            <Modal open={props.open} style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClose={() => props.closeModal(false)}>
                <Card sx={{ minWidth: 275 }} data-cy='modal'>
                    <FormControl >
                        <CardContent>
                            <Typography variant='h4' align='center' gutterBottom>
                                Create Event
                            </Typography>
                            <TextField id="event-name" value={title} label="Event Name" variant="outlined" size='small' onChange={(event) => {setTitle(event.target.value)}}/>
                        </CardContent>
                        <CardContent>
                            <TextField id="desc" value={description} label="Description" variant="standard" size="large" onChange={(event) => {setDesc(event.target.value)}}/>
                        </CardContent>
                        <CardContent>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Start Date"
                                    value={startDate}
                                    onChange={(newValue) => {
                                    setStartDate(newValue);
                                    }}
                                />
                            </LocalizationProvider>
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="End Date"
                                    value={endDate}
                                    onChange={(newValue) => {
                                    setEndDate(newValue);
                                    }}
                                />
                            </LocalizationProvider>

                        </CardContent>
                        <CardActions>
                            
                            <Button style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClick={() => props.closeModal(false)} size="small" data-cy='close'>Close</Button>
                             {/* Submit the data */}
                            
                            <Button style={{display:'flex',alignItems:'center',justifyContent:'center'}}onClick={ async () => {props.closeModal(false);
                                const start = new Date(startDate).getTime();
                                const end = new Date(endDate).getTime();

                                console.log(start, end, title, description);
                                
                                const resolve = await post('/event', {start, end, title, description});
                                console.log(resolve);
                                setDesc(null);
                                setTitle(null);
                                setStartDate(null);
                                setEndDate(null);
                                await props.refetch();
                            }} data-cy='submit'>Submit</Button>
                        
                        </CardActions>

                    </FormControl>
                </Card>
            </Modal>
        </div>
    )

}



export default CreateEventModal;