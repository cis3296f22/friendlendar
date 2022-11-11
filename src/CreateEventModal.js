import './App.css';
import React from 'react'
import {CardActions, Typography, CardContent, Button, Modal, Card, FormControl, TextField, Box} from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';

function CreateEventModal(props) {

    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

    return(        
        <div>
            <Modal open={props.open} style={{display:'flex',alignItems:'center',justifyContent:'center'}} onClose={() => props.closeModal(false)}>
                <Card sx={{ minWidth: 275 }}>
                    <FormControl >
                        <CardContent>
                            <Typography variant='h4' align='center' gutterBottom>
                                Create Event
                            </Typography>
                            <TextField id="event-name" label="Event Name" variant="outlined" size='small' />
                        </CardContent>
                        <CardContent>
                            <TextField id="desc" label="Description" variant="standard" size="large" />
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
                            <Button onClick={() => props.closeModal(false)} size="small">Close</Button>
                             {/* Submit the data */}
                            <Button onClick={() => props.closeModal(false)} size='small' align='right'>Submit</Button>
                        </CardActions>

                    </FormControl>
                </Card>
            </Modal>
        </div>
    )

}



export default CreateEventModal;