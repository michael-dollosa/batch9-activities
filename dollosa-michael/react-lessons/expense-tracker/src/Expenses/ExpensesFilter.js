import "./ExpensesFilter.css"

const ExpensesFilter = ({items, handleOption, option}) => {

  let yearList = [...new Set(items.map(item => item.date.getFullYear()))]
  let optionList = yearList.map((year, index) => (
    <option key={index} value={year} >{ year }</option>
  ))

  return(
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <h3>Filter by Year</h3>
          <select onChange={event => handleOption(event)} value={option}>
            {optionList}
          </select>

        
      </div>
    </div>
  )
}

export default ExpensesFilter