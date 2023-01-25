import { View, Image, Text } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles";
import leftArrow from "../../../assets/images/leftArrow.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import forward15 from "../../../assets/images/forward15.svg";
import back15 from "../../../assets/images/back15.svg";
import pausebtn from "../../../assets/images/pause.svg";
import playbtn from "../../../assets/images/play.png";

function Player({ title, artist, audioSrc, length, audios }) {
  const [trackIndex, setTrackIndex] = useState(-1);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  //track index is used for nextVideo function. By default it is -1.
  if (trackIndex !== -1) {
    title = audios[trackIndex].title;
    artist = audios[trackIndex].artist;
    audioSrc = audios[trackIndex].audioSrc;
  }

  //   console.log(audioSrc, "ds");
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  function formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - hr * 3600) / 60);
    var sec = Math.floor(secs - hr * 3600 - min * 60);

    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    return min + ":" + sec;
  }

  //  console.log(formatSecondsAsTime(audioRef.current.currentTime))
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <View>
      <View style={styles.audioScrollView}>
        <input
          //   style={styles.scrollStyle}
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          style={{ background: trackStyling, height: "5px" }}
        />
      </View>

      <View style={styles.timeView}>
        <Text style={styles.timeStart}>
          {formatSecondsAsTime(audioRef.current.currentTime)}
        </Text>
        <Text style={styles.timeEnd}>
          {formatSecondsAsTime(
            audioRef.current.duration ? audioRef.current.duration : "00:00"
          )}
        </Text>
      </View>

      <View style={styles.buttonsView}>
        <View onClick={toPrevTrack} style={styles.leftArrowView}>
          <Image
            style={styles.playerbtns}
            source={{
              uri: leftArrow,
            }}
            alt="Alternate Text "
          />
        </View>
        <View style={styles.back15View}>
          <Image
            style={styles.playerbtns}
            source={{
              uri: back15,
            }}
            alt="Alternate Text "
          />
        </View>
        <View
          onClick={() => {
            isPlaying ? setIsPlaying(false) : setIsPlaying(true);
          }}
          style={styles.playView}
        >
          <Image
            style={styles.playerbtnsPausePlay}
            source={{
              uri: isPlaying ? pausebtn : playbtn,
            }}
            alt="Alternate Text "
          />
        </View>
        <View style={styles.forward15View}>
          <Image
            style={styles.playerbtns}
            source={{
              uri: forward15,
            }}
            alt="Alternate Text "
          />
        </View>
        <View onClick={toNextTrack} style={styles.rightArrowView}>
          <Image
            style={styles.playerbtns}
            source={{
              uri: rightArrow,
            }}
            alt="Alternate Text "
          />
        </View>
      </View>
    </View>
  );
}

export default Player;
