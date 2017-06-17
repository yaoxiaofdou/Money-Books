import React, { Component, PropTypes } from 'react'
import ThemeSwitch from '../publicComponent/ThemeSwitch/ThemeSwitch.js';
import { connect } from '../publicComponent/react-redux.js';

class Content extends Component {
    
    static contextTypes = {
        themeColor: PropTypes.string
    }

    render () {
        return (
            <div>
                <p style={{ color:this.props.themeColor }}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)

export default Content