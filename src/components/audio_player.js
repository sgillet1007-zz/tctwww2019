/** @jsx React.DOM */

var AudioPlayer = React.createClass({
  propTypes: {
    source: React.PropTypes.string.isRequired,
    isPlaying: React.PropTypes.bool.isRequired,
    defaultTime: React.PropTypes.number,
    onProgress: React.PropTypes.func.isRequired,
    onTimeUpdate: React.PropTypes.func.isRequired,
    onEnd: React.PropTypes.func.isRequired
  },

  componentDidMount() {
    var node = ReactDOM.findDOMNode(this);

    node.addEventListener('progress', this.handleProgress);
    node.addEventListener('timeupdate', this.handleTimeUpdate);
    node.addEventListener('ended', this.handleMediaEnd);

    this.updateIsPlaying();
  },

  componentDidUpdate(prevProps) {
    if (prevProps.source !== this.props.source) {
      this.updateSource();
    }

    if (prevProps.isPlaying !== this.props.isPlaying) {
      this.updateIsPlaying();
    }

    if (prevProps.defaultTime !== this.props.defaultTime) {
      this.updateCurrentTime();
    }
  },

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);

    node.removeEventListener('progress', this.handleProgress);
    node.removeEventListener('timeupdate', this.handleTimeUpdate);
    node.removeEventListener('ended', this.handleMediaEnd);
  },

  render() {
    return (
      <audio preload='none'>
        <source src={this.props.source}
                type='audio/mpeg' />
      </audio>
    );
  },

  handleTimeUpdate() {
    var node = ReactDOM.findDOMNode(this),
        currentTime = node.currentTime,
        trackDuration = node.duration;

    this.props.onTimeUpdate({
      currentTime: currentTime,
      trackDuration: trackDuration
    });
  },

  handleMediaEnd() {
    ReactDOM.findDOMNode(this).currentTime = 0;
    this.props.onEnd();
  },

  handleProgress() {
    var node = ReactDOM.findDOMNode(this),
        trackDuration = node.duration,
        buffered = node.buffered;

    this.props.onProgress({
      trackDuration: trackDuration,
      buffered: buffered
    });
  },

  updateCurrentTime() {
    var node = ReactDOM.findDOMNode(this);
    if (node.readyState) {
      node.currentTime = this.props.defaultTime;
    }
  },

  updateIsPlaying() {
    var node = ReactDOM.findDOMNode(this),
        isPlaying = this.props.isPlaying;

    if (isPlaying) {
      node.play();
    } else {
      node.pause();
    }
  },

  updateSource() {
    var node = ReactDOM.findDOMNode(this),
        isPlaying = this.props.isPlaying;

    node.pause();
    this.props.onTimeUpdate({
      currentTime: 0,
      trackDuration: node.duration
    });

    node.load();
    if (isPlaying) {
      node.play();
    }
  }
});

export default = AudioPlayer;