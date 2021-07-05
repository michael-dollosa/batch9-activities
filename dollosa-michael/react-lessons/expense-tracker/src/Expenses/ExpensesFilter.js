import "./ExpensesFilter.css"

const ExpensesFilter = ({items, handleOption, option}) => {


  return(
    <div className="expenses-filter" data-testid="expenses-filter">
      <div className="expenses-filter__control">
        <h3>Filter by Year</h3>
          <select onChange={event => handleOption(event)} value={option}>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>

          </select>

        
      </div>
    </div>
  )
}

export default ExpensesFilter