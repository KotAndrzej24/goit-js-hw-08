// skrypt vimeo

import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// praca domowa

const STORAGE_KEY = 'videoplayer-current-time';

const timeUpdate = ({ seconds } = 0) => {
  localStorage.setItem(STORAGE_KEY, seconds);
};

const getCurrentTime = () => {
  return localStorage.getItem(STORAGE_KEY);
};

player.setCurrentTime(getCurrentTime());

player.on('timeupdate', _.throttle(timeUpdate, 1000));

// player.on(
//   'timeupdate',
//   _.throttle(timeUpdate => {
//     console.log(timeUpdate.seconds);
//   }, 750)
// );
