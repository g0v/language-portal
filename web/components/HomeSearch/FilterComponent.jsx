const FilterComponent = () => {
    return (
      <div className="row mb-1">
        <div className="col-12">
          <div className="form-check form-check-inline">
            <input type="checkbox" value="Academic term" name="category" id="category_1" />
            <label className="form-check-label text-white" for="category_1">Academic term</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" value="Bilingual vocabulary" name="category" id="category_2" />
            <label className="form-check-label text-white" for="category_2">Bilingual vocabulary</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" value="Textbook nouns" name="category" id="category_3" />
            <label className="form-check-label text-white" for="category_3">Textbook nouns</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" value="Dictionary" name="category" id="category_4" />
            <label className="form-check-label text-white" for="category_4">Dictionary</label>
          </div>
        </div>
      </div>
    );
};

export default FilterComponent;