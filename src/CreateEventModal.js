import './App.css';
import React from 'react'
import {CardActions, Typography, CardContent, Button, Modal, Card, FormControl, TextField, Box} from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {post} from './utils.js'


function CreateEventModal(props) {

    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [title, setTitle] = React.useState(null);
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
                            }} data-cy='submit'>Submit</Button>
                        
                        </CardActions>

                    </FormControl>
                </Card>
            </Modal>
        </div>
    )

}



export default CreateEventModal;