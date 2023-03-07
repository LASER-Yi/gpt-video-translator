class VideoFinder {
  private video: HTMLVideoElement | null;

  constructor() {
    this.video = null;
  }

  public findVideo(root: Document) {
    const videos = root.querySelectorAll('video');
    let width = 120;

    let bestVideo: HTMLVideoElement | null = null;

    console.log(videos);

    for (const element of videos) {
      if (element.clientWidth >= width) {
        bestVideo = element;

        width = element.clientWidth;
      }
    }

    if (this.video) {
      this.video.textTracks.removeEventListener('change', this.onTextTracksChanged);
    }

    this.video = bestVideo;

    if (this.video) {
      this.video.textTracks.addEventListener('change', this.onTextTracksChanged);
    }

    console.log('found required video element...', this.video);
  }

  private onTextTracksChanged() {
    // TODO
  }
}

export default new VideoFinder();
