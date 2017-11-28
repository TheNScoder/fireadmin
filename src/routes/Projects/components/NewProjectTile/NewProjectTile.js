import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui-next/Paper'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
import classes from './NewProjectTile.scss'

const iconSize = '6rem'
const iconStyle = { width: iconSize, height: iconSize }
const color = '#979797'
const hoverColor = '#616161'

export const NewProjectTile = ({ onClick }) => (
  <Paper className={classes.container} onClick={onClick}>
    <ContentAddCircle color={color} hoverColor={hoverColor} style={iconStyle} />
  </Paper>
)

NewProjectTile.propTypes = {
  onClick: PropTypes.func
}

export default NewProjectTile
