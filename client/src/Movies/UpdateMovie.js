import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const initialValues = {
  title: "",
  director: "",
  metascore: 0,
  stars: "",
};

export default function UpdateMovie(props) {
  const [values, setValues] = useState(initialValues);
  const { id } = useParams();

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.updateMovie(id, values);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        console.log(res.data);
        setValues({ ...res.data, stars: res.data.stars.join(", ") });
      })
      .catch(err => console.log(err));
  }, []);

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
        <input
          type="text"
          id="stars"
          name="stars"
          value={values.stars}
          onChange={onChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
