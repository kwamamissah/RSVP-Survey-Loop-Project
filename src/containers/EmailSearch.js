import React, { Component } from 'react';

class EmailSearch extends Component {
    state = {
        email: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    // handle submit will take the email submitted then check the database and see if it exist
    //if the email exist return positive validation "Email exist rerouting to post survey"
    //else if email doesn't exist return negative validation "Email not found, rerouting to presurvey"
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.email)
    }

    render() {
        return (
            <form>
                <div className="form-group col-4">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name= "email" onChange={(e) => this.handleChange(e)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </div>
            </form>
        );
    }
}

export default EmailSearch;