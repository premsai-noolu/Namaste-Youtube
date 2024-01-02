import React from "react";

const commentsData = [
  {
    name: "prem",
    text: "He is a good boy",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold ">Comments</h1>
      <Comment data={commentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
