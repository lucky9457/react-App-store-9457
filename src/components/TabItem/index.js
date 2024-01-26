// Write your code here
import './index.css'

const TabItem = props => {
  const {isActive, func, tablist} = props
  const {tabId, displayText} = tablist

  const clicktab = () => {
    func(tabId)
  }

  const clases = isActive ? 'tab-item-name-click' : ''
  const hrlineclass = isActive ? 'hrlineClick' : ''

  return (
    <li className="liststyle">
      <button onClick={clicktab} className={`tab-item-name ${clases}`}>
        {displayText}
      </button>
      <hr className={`hrline ${hrlineclass}`} />
    </li>
  )
}
export default TabItem
