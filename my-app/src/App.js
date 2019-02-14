import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux';
import { load_form, save_form } from './store/action/formAction';


export class App extends Component {

  constructor (props) {
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      company: '',
      department: '',
      position: '',
      email: '',
    }
  }

  componentDidMount(){
    this.props.loadForm();
  }

  componentDidUpdate(prevProps) {
    for (let key in this.state) {
      if (this.props[key] !== prevProps[key]) {
        if (this.props[key]){
          this.setState({
            [key]: this.props[key]
          })
        } else {
          this.setState({
            [key]: ''
          })
        }
      }  
    }
  }

  handleInput = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSave = () =>{
    let data={
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      company: this.state.company,
      department: this.state.department,
      position: this.state.position,
      email: this.state.email,
    }
    this.props.saveForm(data)
  }

  render() {
    return (
      <div className="form">

        <div className="form-group row">
            <label className="col-sm-4 col-form-label">First Name</label>
            <div className="col-sm-8">
              <input type="text" className="form-control firstName" name="firstName" value={this.state.firstName} onChange={this.handleInput}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-4 col-form-label">Last Name</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.handleInput}/>
            </div>
        </div>

        <div className="divider"></div>

        <div className="form-group row">
            <label className="col-sm-4 col-form-label">Company</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="company" value={this.state.company} onChange={this.handleInput}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-4 col-form-label">Department</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="department" value={this.state.department} onChange={this.handleInput}/>
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-4 col-form-label">Position</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="position" value={this.state.position} onChange={this.handleInput}/>
            </div>
        </div>

        <div className="divider"></div>

        <div className="form-group row">
            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleInput}/>
            </div>
        </div>

        <div className="divider"></div>

        <button className="btn btn-primary" onClick={this.handleSave}>Save</button>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName: state.form.firstName,
  lastName: state.form.lastName,
  company: state.form.company,
  department: state.form.department,
  position: state.form.position,
  email: state.form.email,
});

const mapDispatchtoProps = dispatch => {
  return {
      loadForm: () => { dispatch(load_form())},
      saveForm: (data) => { dispatch(save_form(data)) },
  }
};

export default connect(mapStateToProps,mapDispatchtoProps)(App);