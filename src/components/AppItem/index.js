// Write your code here
import './index.css'

const AppItem = props => {
  const {appdata} = props
  const {appId, appName, imageUrl, category} = appdata
  return (
    <li className="appElement">
      <img src={imageUrl} alt={appName} className="appimg" />
      <p className="appname">{appName}</p>
    </li>
  )
}
export default AppItem
