import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends React.Component<any, any> {

    UNSAFE_componentWillMount() {
        this._validateUser()
    }

    _validateUser = () => {
        const { authInfo } = this.props
        if (authInfo && authInfo.isLoggenIn) {
          // validate access token 
        } else {
          this.props.history.push('/login');
        }

    }

    render() {
        return (
           <div>
                <h2>
                    This is a react boilerplate
                </h2>
           </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    authInfo: state.auth
})

export default connect(mapStateToProps)(Home)