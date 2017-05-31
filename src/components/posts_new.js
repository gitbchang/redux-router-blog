import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

  renderField = (field) => {
    // field.meta.touched field.meta.error
    // ES6 destructuring
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.customLabel}</label>
        <input className="form-control" type="text" {...field.input}/> 
        <div className="text-help">
          {touched ? error : ''}
        </div>        
      </div>
    )
  }

  onFormSubmit = (values) => {
    console.log(values);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field name="title" component={this.renderField} customLabel="Title"/>

          <Field name="categories" component={this.renderField} customLabel="Categories"/>

          <Field name="content" component={this.renderField} customLabel="Post Content"/>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// validate function will be called when form is submitted
function validate(values) {
  const errors = {};
  // if(values.title.length < 3) {   errors.title="Title must be at least 3
  // characters"; } Validate the inputs from values
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Write some characters on post"
  }
  return errors;
}

// put in unique string for form:'unique string' these only need to match if we
// have a multi-page form and we need to share data
export default reduxForm({validate, form: 'PostsNewForm'})(PostsNew);