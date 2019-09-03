import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";

class CreateEntryComponent extends Component {
  render() {
    return (
      <div>
        <h2>Add a Journal Entry</h2>
        <Formik
          onSubmit={(values, actions) => {
            // Call rest api to update db
            console.log("You submitted: " + JSON.stringify(values));
            const newEntry = {
              entry_title: values.title,
              entry_date: values.date,
              entry_starred: false,
              entry_content: values.content
            };

            axios
              .post("http://localhost:4000/entries/add", newEntry)
              .then(res => {
                if (res.status === 200) {
                  console.log("Succesfully added new journal entry!");
                  this.props.newEntry();
                }
              });
          }}
        >
          <Form>
            <Field
              style={{ display: "block" }}
              placeholder="Title"
              type="text"
              name="title"
            />

            <Field
              style={{ display: "block" }}
              placeholder="Date"
              type="text"
              name="date"
            />

            <Field
              style={{ display: "block" }}
              placeholder="What happened today?"
              component="textarea"
              type="text"
              name="content"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default CreateEntryComponent;
