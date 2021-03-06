// @flow
import React from 'react'
import { Route } from 'react-router-dom'

import MainPage from './MainPage'
import Posts from './Posts'
import WriteBlog from './WriteBlog'
import ViewPost from './ViewPost/ViewPost'

import '../grid.scss'

const Routes = () => (
  <main className={'grid__cell_12'}>
    <Route exact path={'/'} component={MainPage}/>
    <Route path={'/layout'} component={Posts}/>

    <Route exact path={'/edit-article'} component={WriteBlog}/>
    <Route exact path={'/edit-article/:id'} component={WriteBlog}/>

    <Route path={'/view_post'} component={ViewPost}/>
  </main>
)


export default Routes
