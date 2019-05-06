import React, { Component } from 'react';

class EmailSearch extends Component {
    render() {
        return (
            <form>
                <div class="form-group col-4">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}

export default EmailSearch;