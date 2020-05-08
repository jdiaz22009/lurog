import { connect } from 'react-redux'

const Connect = (component) => {
  const mapStateToProps = (state) => {
    return { state }
  }
  const mapDispatchToProps = (dispatch) => {
    return { dispatch }
  }
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default Connect
