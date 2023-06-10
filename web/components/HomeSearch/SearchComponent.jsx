import componentStyles from "../../styles/Home.search.module.css";

const SearchComponent = () => {
    return (
      <div className={componentStyles["tab-content"]}>
        <div className={componentStyles["tab-pane"]}>
          <form className={componentStyles["row"]} method="get" id="search" action="/search/">
            <div className={componentStyles["col-auto"]}>
              <select className={componentStyles["form-select"]} name="query_field" id="query_field" aria-label="Limits">
                <option value="title" selected="">Terms</option>
                <option value="text">All fields</option>
                <option value="author">Author</option>
              </select>
            </div>
          </form>
        </div>
        {/* More divs */}
      </div>
    );
  }

  export default SearchComponent;