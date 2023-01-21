import PropTypes from 'prop-types'

export default function Link({ children }) {
    return <li><a href="#">{ children }</a></li>
}

Link.PropTypes = {
    children: PropTypes.element.isRequired
}