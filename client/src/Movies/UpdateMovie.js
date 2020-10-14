import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function UpdateMovie({ history }) {
  const [values, setValues] = useState({});
  const { id } = useParams();

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, values)
      .then(res => {
        console.log(res);
        history.push(`/movies/${id}`);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <form className="movie-card" onSubmit={onSubmit}>
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

      <button>Submit</button>
    </form>
  );
}
