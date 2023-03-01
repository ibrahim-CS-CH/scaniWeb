import { Link } from 'react-router-dom'
const SharedLayout = () => {
  return (
    <ul className='nav' id='nav'>
        <li>
          <Link to={'/'}>list prodcuts</Link>
        </li>
        <li>
          <Link to={'/addproduct'}>add new prodcuts</Link>
        </li>
    </ul>
  )
}

export default SharedLayout