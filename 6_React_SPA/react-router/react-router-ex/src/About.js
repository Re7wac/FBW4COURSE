import React from "react";

const About = () => (
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12  ">
          <h1> Add Book </h1>
          <form id="book-form">
            <div>
              <label for="title"> Title </label>
              <input type="text" id="title" class="u-full-width" />
            </div>
            <div>
              <label for="author"> Author </label>
              <input type="text" id="author" class="u-full-width" />
            </div>
            <div>
              <label for="isbn"> ISBN# </label>
              <input type="text" id="isbn" class="u-full-width" />
            </div>
            <div>
              <input type="submit" value="Submit" class="u-full-width" />
            </div>
          </form>
          <table class="u-full-width">
            <thead>
              <tr>
                <th> Title </th> <th> Author </th> <th> ISBN </th> <th> </th>
              </tr>
            </thead>
            <tbody id="book-list"> </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export { About };
