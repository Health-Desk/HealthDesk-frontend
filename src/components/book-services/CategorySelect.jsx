function CategorySelect({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <>
      <label className="block mb-2 font-medium">
        Select Category
      </label>

      <select
        className="border rounded-md p-2 w-full mb-6"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Choose Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </>
  );
}

export default CategorySelect;