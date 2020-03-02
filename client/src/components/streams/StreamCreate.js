import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Enter Title" name="title" component={this.renderInput} />
        <Field label="Enter Description" name="description" component={this.renderInput} />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = ({ title, description }) => {
  const errors = {};

  if (!title) {
    errors.title = 'You must enter a title';
  }

  if (!description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);