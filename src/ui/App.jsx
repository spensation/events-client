import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
// User
import * as eventActions from 'store/actions/event-actions'
import AppBar from 'ui/AppBar'
import Home from 'ui/Home'
import NewEvent from 'ui/NewEvent'
import withRoot from './withRoot'
import SelectTest from './SelectTest/SelectTest';
import SelectTry from './SelectTry'

class App extends React.Component {
  componentDidMount() {
    this.props.requestReadEvents()
  }

  render() {
    return (
      <Router>
        <Fragment>
        <AppBar />
        <Route path='/select' component={SelectTest} />
        <Route path='/select-try' component={SelectTry} />
        <Route path='/new-event' component={NewEvent} />
        <Route exact path='/' component={Home} />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { }
}

export default connect(mapStateToProps, eventActions)(withRoot(App))