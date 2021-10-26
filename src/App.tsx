

import { createStyles, makeStyles, Theme } from '@material-ui/core'
import * as React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import AggregatorScreen from './pages/AggregatorScreen'
import SmartOrderScreen from './pages/SmartOrderScreen'
import ResultsScreen from './pages/ResultsScreen'
import SubgraphScreen from './pages/SubgraphScreen'


const drawerWidth = 240

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: 0,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
  }),
)

const App = () => {
  const classes = useStyles()


  //Create state hooks to track objects from various firebase collections

  /**
   * Set up update callbacks after first    render
   */
  React.useEffect(() => {

  }, [])

  return (
    <div className={classes.root}>
      <Router >
        <Switch>
          <Route exact path="/" render={() => <HomeScreen />} />
          <Route exact path="/smartOrder" render={() => <SmartOrderScreen />} />
          <Route exact path="/aggregator" render={() => <AggregatorScreen />} />
          <Route exact path="/advanced" render={() => <ResultsScreen />} />
          <Route exact path="/subgraph" render={() => <SubgraphScreen />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
