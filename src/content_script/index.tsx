import VideoFinder from './video';

VideoFinder.findVideo(document);

setInterval(() => {
  VideoFinder.findVideo(document);
}, 10 * 1000);
