import React from 'react';
import './Login.scss';
import { Config } from '../../config/Config';

class LoginComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: undefined,
      loading: false,
      valid: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { username, password } = this.state;
    this.setState({ loading: true, valid: false});
    event.preventDefault();
    fetch(`${Config.api}/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
    })
    .then(async (response) => {
      if (!response.ok) { 
        const error = await response.text();
        this.setState({ valid: false, error: JSON.parse(error).message});
      } else {
        this.setState({ valid: true});
      }
      this.setState({ loading: false});
    })
  }

  render() {

    const { username, password, loading, valid, error } = this.state;

    return (
      <div className="login">
        {
          valid ? <div className="message sucess">Success</div> : null
        }
        {
          !valid && error ? <div className="message error">{error}</div> : null
        }
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <input type="text"
            id="username"
            name="username"
            placeholder="Username..."
            onChange={(event) => { this.onChange(event) }}
            value={username} />
          <input type="password"
            id="password"
            name="password"
            placeholder="Password..."
            onChange={(event) => { this.onChange(event) }}
            value={password} />
          <input type="submit" value="Submit" className="button-green" disabled={loading} />
        </form>
      </div>
    );
  }
}


export default LoginComponent;
