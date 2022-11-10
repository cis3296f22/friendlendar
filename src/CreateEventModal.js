import './App.css';
import React from 'react'
import {CardActions, Typography, CardContent, Button, Modal, Card} from "@mui/material"




function CreateEventModal(props) {

    return(
        <div>
            <Modal open={props.open}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            Test
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => props.closeModal(false)} size="small">Close</Button>
                    </CardActions>
                </Card>
            </Modal>
        </div>
    )

}

export default CreateEventModal;