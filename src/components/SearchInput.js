import './SearchInput.css';

const SearchInput = ({ onInputChange, search }) => {
  return (
    <>
      <div className="input-container">
        <label className="label" htmlFor="search">
          JOB LIST
        </label>
        <input
          className="search-input"
          placeholder="Search Job"
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={onInputChange}
        />
      </div>
      <hr className="divider" />
    </>
  );
};

export default SearchInput;
