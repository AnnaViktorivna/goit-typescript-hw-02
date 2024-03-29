const FormSearch = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log;
    const queryImages = form.elements.query.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.queryImages.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSearch(queryImages);
    form.reset();
  };
  return (
    <div>
      {" "}
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            // autocomplete='off'
            // autofocus
            placeholder='Search images and photos'
            name='query'
          />
          <button type='submit'>Search</button>
        </form>
      </header>
    </div>
  );
};

export default FormSearch;
