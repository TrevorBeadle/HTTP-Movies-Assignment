import React from "react";
import { useState } from "react";

const initialValues = {
  title: "",
  director: "",
  metascore: 0,
  stars: "",
};

export default function AddMovie({ addMovie }) {
  const [values, setValues] = useState(initialValues);

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addMovie(values);
  };

  return (
    <div className="movie-card">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={values.title}
          onChange={onChange}
        />

        <label htmlFor="director">Director</label>
        <input
          type="text"
          id="director"
          name="director"
          value={values.director}
          onChange={onChange}
        />

        <label htmlFor="metascore">Metascore</label>
        <input
          type="number"
          id="metascore"
          name="metascore"
          value={values.metascore}
          onChange={onChange}
        />

        <label htmlFor="stars">Stars (separate with commas)</label>
        <textarea
          name="stars"
          id="stars"
          cols="30"
          rows="10"
          value={values.stars}
          onChange={onChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
