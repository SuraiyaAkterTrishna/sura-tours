import React from "react";

const Book = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form className="form">
              <div className="u-mb-medium">
                <h2 className="heading-secondary">start booking now</h2>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Full name"
                  id="name"
                  className="form__input"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Email address"
                  id="email"
                  className="form__input"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="small"
                    className="form__radio-input"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-btn"></span>
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="large"
                    className="form__radio-input"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-btn"></span>
                    Large tour group
                  </label>
                </div>
              </div>
              <div className="form__group u-mt-medium u-mb-medium">
                <button className="btn btn--primary">
                  Next step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
