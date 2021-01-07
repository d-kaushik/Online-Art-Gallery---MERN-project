import React, { Component } from 'react'

export class ChangePassComp extends Component {
    render() {
        return (
            <section className="mb-5 text-center">
        <p>Set a new password</p>
        <form action="#!">
          <div className="md-form md-outline">
            <input type="password" id="newPass" className="form-control" />
            <label data-error="wrong" data-success="right" htmlFor="newPass">New password</label>
          </div>
          <div className="md-form md-outline">
            <input type="password" id="newPassConfirm" className="form-control" />
            <label data-error="wrong" data-success="right" htmlFor="newPassConfirm">Confirm password</label>
          </div>
          <button type="submit" className="btn btn-primary mb-4">Change password</button>
        </form>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <u><a href="https://mdbootstrap.com/docs/jquery/admin/auth/login/">Back to Log In</a></u>
          <u><a href="https://mdbootstrap.com/docs/jquery/admin/auth/register/">Register</a></u>
        </div>
      </section>
        )
    }
}

export default ChangePassComp
