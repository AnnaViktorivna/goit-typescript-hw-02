// import { useState } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

const searchFormSchema = Yup.object().shape({
  searchTitle: Yup.string().required("Search term is required!"),
});

const FORM_INITIAL_VALUES = {
  searchTitle: "",
};

const FormSearch = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values.searchTitle);
    // console.log(values);
  };
  // const [resImg, setResImg] = useState("");

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   const queryImages = form.elements.img.value.trim();

  //   if (queryImages === "") {
  //     alert("Please enter search term!");
  //     return;
  //   }
  //   onSearch(queryImages);
  //   form.reset();
  //   setResImg("");
  // };

  // const handleChange = (evt) => {
  //   setResImg(evt.target.value); // Оновлення стану з введеним текстом
  // };
  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={searchFormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Search product by brand or name</h2>
          <label>
            <Field
              type='text'
              name='searchTitle'
              placeholder='Enter search query...'
            />
            {/* <ErrorMessage component='p' name='searchTerm' /> */}
          </label>
          <button type='submit' aria-label='Search'>
            🔍
          </button>
        </Form>
      </Formik>
      {/*       
      {" "}
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search images and photos'
            name='img'
            value={resImg}
            onChange={handleChange}
          />
          <button type='submit'>Search</button>
        </form>
      </header> */}
    </div>
  );
};

export default FormSearch;
