import React from "react";
import { useState } from "react";

const index = () => {
  return (
    <section className="addNewCourse">
      <div class="container new-course-container">
        <p class="admin-header-text">Add a new course</p>
        <form action="">
          <div class="row container">
            <div class="admin-input-field-div col-12 col-lg-6">
              <label htmlFor="coverImage" class="form-label admin-form-label">
                Select course cover image
              </label>
              <input
                class="form-control"
                type="file"
                id="coverImage"
                accept="image/*"
              />
            </div>

            <div class="input-field-div col-12 col-lg-6">
              <label htmlFor="courseTitle" class="form-label admin-form-label">
                Course title
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter course title"
                id="courseTitle"
              />
            </div>

            <div class="input-field-div col-lg-12">
              <label
                htmlFor="courseDescription"
                class="form-label admin-form-label"
              >
                Course description
              </label>
              <textarea
                class="form-control admin-text-area"
                placeholder="Enter the course description"
                id="courseDescription"
              ></textarea>
            </div>

            <div class="input-field-div col-12 col-lg-6">
              <label htmlFor="studentPrice" class="form-label admin-form-label">
                Student price
              </label>
              <div class="input-group">
                <span class="input-group-text">₦</span>
                <input
                  id="studentPrice"
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest naira)"
                />
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-field-div col-12 col-lg-6">
              <label htmlFor="agentPrice" class="form-label admin-form-label">
                Agent price
              </label>
              <div class="input-group">
                <span class="input-group-text">₦</span>
                <input
                  id="agentPrice"
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-field-div col-lg-12">
              <label
                htmlFor="classDuration"
                class="form-label admin-form-label"
              >
                Class duration in days
              </label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter class duration in days"
                id="classDuration"
              />
            </div>
          </div>
          <button class="btn btn-primary add-new-course-button" type="submit">
            Add new course
          </button>
        </form>
      </div>
    </section>
  );
};

export default index;
