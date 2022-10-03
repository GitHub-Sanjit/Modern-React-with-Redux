import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        text={faker.lorem.words()}

        // timeAgo={faker.date.past()}
      ></CommentDetail>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        // timeAgo={faker.date.past()}
        text={faker.lorem.words()}
      ></CommentDetail>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        // timeAgo={faker.date.past()}
        text={faker.lorem.words()}
      ></CommentDetail>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        // timeAgo={faker.date.past()}
        text={faker.lorem.words()}
      ></CommentDetail>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        // timeAgo={faker.date.past()}
        text={faker.lorem.words()}
      ></CommentDetail>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        // timeAgo={faker.date.past()}
        text={faker.lorem.words()}
      ></CommentDetail>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        // timeAgo={faker.date.past()}
        text={faker.lorem.words()}
      ></CommentDetail>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={faker.name.firstName()}
        // timeAgo={faker.date.past()}
        text={faker.lorem.words()}
      ></CommentDetail>
    </div>
  );
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
