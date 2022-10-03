import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author={faker.name.firstName()}></CommentDetail>
      <CommentDetail author={faker.name.firstName()}></CommentDetail>
      <CommentDetail author={faker.name.firstName()}></CommentDetail>
      <CommentDetail author={faker.name.firstName()}></CommentDetail>
      <CommentDetail author={faker.name.firstName()}></CommentDetail>
      <CommentDetail author={faker.name.firstName()}></CommentDetail>
      <CommentDetail author={faker.name.firstName()}></CommentDetail>
      <CommentDetail author={faker.name.firstName()}></CommentDetail>
    </div>
  );
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
