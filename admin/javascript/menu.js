function showCategory(categoryID) {
  // Get all elements with class "category"
  const categories = document.getElementsByClassName('category');
  // Loop through each category element
  for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      if (category.id === categoryID) {
          // If the category's ID matches the provided categoryId, display it
          category.style.display = 'block';
      } else {
          // Otherwise, hide it
          category.style.display = 'none';
      }
  }
}