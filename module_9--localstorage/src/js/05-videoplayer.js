import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const mainTitle = document.querySelector('.main-title');
const playedVideo = document.querySelector('.playedVideo');
const player = new Vimeo.Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

const onPlay = function (data) {
  console.log('played the video!');
  playedVideo.textContent = 'Lets go!!!';
};

player.on('play', onPlay);

const onTimeUpdate = function (data) {
  localStorage.setItem(CURRENT_TIME, data.seconds);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title: ', title);
  mainTitle.textContent = title;
});

const savedPlayedTime = localStorage.getItem(CURRENT_TIME);

player.setCurrentTime(Number(savedPlayedTime)).then(function (seconds) {
  seconds = Number(savedPlayedTime);
});
