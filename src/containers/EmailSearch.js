import React, { Component } from 'react';
import './EmailSearch.css';
import firebase from '../firebase.js';

class EmailSearch extends Component {
    state = {
        email: "",
        name: "",
        emailFire: [],
        sendingEmail: false
    }

    handleChange = (e) => {
        this.setState({ [
            e.target.name]: e.target.value,
            sendingEmail: true
                        })
    }
    // handle submit will take the email submitted then check the database and see if it exist
    //if the email exist return positive validation "Email exist rerouting to post survey"
    //else if email doesn't exist return negative validation "Email not found, rerouting to presurvey"
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.email)
    }

    //Use Firebase for dummy data.


    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        
        db.collection("/emails").add({
          name: this.state.name,
          email: this.state.email
        });  
        this.setState({
          name: "",
          email: ""
        });
      };

      findUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
    
        const emailRef = db.collection("/emails").where("email", "==",  `${this.state.email}`)

        emailRef.get().then(function (querySnapshot){
            querySnapshot.forEach(function(doc){
                console.log(doc.id, '=>', doc.data());
            })
        })
      }




    render() {
        return (
            <form>
                <div className="form-group col-4">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name= "email" onChange={(e) => this.handleChange(e)} />
                    <button type="submit" className="btn btn-outline-primary btn-sm" onClick={(e) => this.findUser(e)}>Submit</button>
                </div>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </form>
        );
    }
}

export default EmailSearch;