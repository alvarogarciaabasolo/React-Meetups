import React, { useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useNavigate } from "react-router-dom";

export default function NewMeetupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    image: "https://www.deutschakademie.de/muenchen/blog/wp-content/uploads/2021/03/Mu%CC%88nchen-Alemania.jpg",
    address: "",
    description: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    const meetupData = {
      id: Date.now().toString(),
      title: formData.title,
      image: formData.image,
      address: formData.address,
      description: formData.description,
    };
    navigate("/", { state: { meetupData } });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Sample Meetup Title"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Fake Street"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={formData.description}
            onChange={handleChange}
            placeholder="This is a sample description of the meetup."
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
