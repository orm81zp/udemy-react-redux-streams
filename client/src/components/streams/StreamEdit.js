import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchStream(match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.stream.id, formValues);
  }

  render() {
    if (!this.props.stream) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream , 'title', 'description')}
          onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  return {
    stream: state.streams[match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
