import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

import '../../sass/letter.scss';

export default class Letter extends PureComponent {

    render() {
        const { symbol, letterClick } = this.props
        return (
            <button className="symbol" onClick={letterClick}>{symbol}</button>
        )
    }

}

Letter.defaultProps = {
    letterClick: ()=>{}
}

Letter.propTypes = {
    letterClick: PropTypes.func,
    symbol: PropTypes.string.isRequired
}