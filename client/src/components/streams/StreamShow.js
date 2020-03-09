import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  render() {
    const { stream } = this.props;
    if (!stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    stream: state.streams[id]
  }
}

export default connect(
  mapStateToProps, { fetchStream })
(StreamShow);
