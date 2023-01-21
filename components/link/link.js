import PropTypes from 'prop-types'

export default function Link({ children }) {
    return <li><a href="#">{ children }</a></li>
}

Link.propTypes = {
    children: PropTypes.string.isRequired
}