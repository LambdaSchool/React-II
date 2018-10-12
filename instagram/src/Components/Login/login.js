import React from "react"

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            username: "",
            password: "",
        }
    }
    handelInput = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    submitLogin = () => {
        let user = this.state.username
        localStorage.setItem("user", user)
        window.location.reload()
    }
    render() {
        return (
            <>
                <h1>Welcome to Instagram-Clone</h1>
                <h2>Please Login</h2>
                <input
                placeholder="Enter Username"
                onChange={this.handelInput}>
                </input>
                <input
                placeholder="Enter Password">
                </input>
                <button
                    onClick={this.submitLogin}>
                    Login</button>
            </>
        )
    }
}

export default Login;