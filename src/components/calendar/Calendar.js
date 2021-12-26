import React from "react";
import {Card, CardContent, CardHeader, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';

const Calendar = () => {

    const title = (
        <Typography component="h5" variant="h5">
            Programul de emisie 2021
        </Typography>
    );
    return (
        <Card sx={{
            width: '100%',
            backgroundColor: (theme) => theme.palette.background.paper,
            marginBottom: '20px'
        }}>
            <CardHeader title={title} avatar={<EventNoteIcon/>}/>
            <CardContent sx={{flex: '1 0 auto'}}>
                <Table size="small">
                    <TableBody>
                        <TableRow sx={{backgroundColor: '#eee'}}>
                            <TableCell align="left" colSpan={2}>
                                <Typography component="h5" variant="h5">
                                    Duminica
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <strong>
                                    10:00
                                </strong>
                            </TableCell>
                            <TableCell align="left">
                                <p>Serviciul Divin - Biserica Chișinău № 2</p>
                                <p>Богослужение 2-й Кишиневской церкви</p>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">
                                <strong>
                                    18:00
                                </strong>
                            </TableCell>
                            <TableCell align="left">
                                <p>Serviciul Divin - Biserica Chișinău № 2</p>
                                <p>Богослужение 2-й Кишиневской церкви</p>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};


export default Calendar;