import './index.css'

const DenominationItem = props => {
  const {eachList, updateBalance} = props
  const {value} = eachList

  const deductAmount = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={deductAmount}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
