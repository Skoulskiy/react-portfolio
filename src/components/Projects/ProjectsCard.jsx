import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectsCard = ({title, desciption, imgUrl}) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl}></img>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{desciption}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectsCard