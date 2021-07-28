import React from 'react'
import { Col } from 'react-bootstrap'
import ContentHeader from './ContentHeader'
import NotesList from './NotesList'

const MainContentWraper = () => (
  <Col className="block-green">
    <ContentHeader />
    <NotesList />
  </Col>
)

export default MainContentWraper
