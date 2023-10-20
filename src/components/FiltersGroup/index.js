import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingList = () => {
    const {ratingsList} = props
    return ratingsList.map(each => {
      const {changeRatingId} = props
      const onClickRating = () => changeRatingId(each.ratingId)
      return (
        <li className="rating-item" key={each.ratingId} onClick={onClickRating}>
          <img src={each.imageUrl} alt="rating" className="rating-image" />
        </li>
      )
    })
  }

  const renderRating = () => (
    <div>
      <h1 className="rating-heading">Ratting</h1>
      <ul className="rating-ul-container">{renderRatingList()}</ul>
    </div>
  )

  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(each => {
      const {changeCategoryId} = props
      const onClickCategory = () => changeCategoryId(each.categoryId)
      return (
        <li
          className="category-item"
          key={each.categoryId}
          onClick={onClickCategory}
        >
          <p className="category">{each.name}</p>
        </li>
      )
    })
  }
  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-ul-container">{renderCategoryList()}</ul>
    </>
  )
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearch = event => {
    const {onEnterKeySearch} = props
    if (event.key === 'Enter') {
      onEnterKeySearch()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          type="search"
          className="search-box"
          placeholder="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearch}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRating()}
      <button className="clear-button" type="button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
