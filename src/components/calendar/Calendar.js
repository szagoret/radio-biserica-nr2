import React from "react";
import {Card, CardContent, CardHeader, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';

const Calendar = ({calendar}) => {

    const title = (<Typography component="h5" variant="h5">
        {calendar.title}
    </Typography>);
    return (<Card sx={{
        width: '100%', backgroundColor: (theme) => theme.palette.background.paper, marginBottom: '20px'
    }}>
        <CardHeader title={title} avatar={<EventNoteIcon/>}/>
        <CardContent sx={{flex: '1 0 auto'}}>
            <Table size="small">
                <TableBody>
                    {calendar.program.map(dayOfWeek => (
                        <>
                            <TableRow sx={{backgroundColor: '#eee'}}>
                                <TableCell align="left" colSpan={2}>
                                    <Typography component="h5" variant="h5">
                                        {dayOfWeek.title}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            {dayOfWeek.events.map(event => (<TableRow>
                                <TableCell align="left">
                                    <strong>
                                        {event.time}
                                    </strong>
                                </TableCell>
                                <TableCell align="left">
                                    <p>{event.title}</p>
                                </TableCell>
                            </TableRow>))}
                        </>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>);
};


export default Calendar;