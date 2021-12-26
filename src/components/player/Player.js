import React, {useEffect, useRef, useState} from "react";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import LoadingAudioButton from "./LoadingAudioButton";
import VolumeSlider from "./VolumeSlider";
import {debounce} from 'lodash';
import {Grid} from "@mui/material";


const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [canPLay, setCanPlay] = useState(true);
    const [volume, setVolume] = useState(70);

    const player = useRef();


    useEffect(() => {
        player.current.onloadstart = () => console.log("onloadstart");
        player.current.oncanplay = () => console.log("oncanplay");
        player.current.onended = () => {
            console.log("onended");
            setIsPlaying(false);
        };
        player.current.onpause = () => {
            console.log("onpause");
            setIsPlaying(false);
        };
        player.current.onstalled = () => {
            console.log("onstalled");
            setIsPlaying(false);
            // when no stream
        };
        player.current.onplaying = () => console.log("onplaying");
        player.current.onabort = () => console.log("onabort");
        player.current.onerror = () => console.log("onerror");
        player.current.onwaiting = () => {
            console.log("onwaiting");
            // on stream is finished and press start
            // should show a reloading button
        };
        player.current.oncanplaythrough = () => console.log("oncanplaythrough");
    }, []);


    useEffect(() => {
        player.current.volume = volume / 100;
    }, [volume]);

    const play = () => {
        player.current.play();
        setIsPlaying(true);
    };
    const pause = () => {
        player.current.pause();
        setIsPlaying(false);
    };

    const debounceSetVolume = debounce(setVolume, 100);

    return (
        <>
            <Grid container>
                <Grid item>
                    {
                        canPLay ?
                            isPlaying ? <PauseButton onClick={() => pause()}/> : <PlayButton onClick={() => play()}/>
                            : <LoadingAudioButton/>
                    }
                </Grid>
                <Grid item>
                    <VolumeSlider onChange={(value) => debounceSetVolume(value)}/>
                </Grid>
            </Grid>
            <audio ref={player}>
                <source src="https://c32.radioboss.fm:18394/stream"/>
            </audio>
        </>
    );
};

export default Player;