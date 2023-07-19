import { Reply } from "@mui/icons-material";
import React, { useState } from "react";
import {
  BlogCommentsContainer,
  CommentContainer,
  CommentFigure,
  CommentInnerContainer,
  CommentText,
  ReplyContainer,
  UsernameContainer,
  UsernameInnerContainer,
} from "./BlogComments.styled";
import CommentForm from "./CommentForm";

const BlogComment = () => {
  const [viewForm, setViewForm] = useState(false);

  const handleShowReply = () => {
    setViewForm((prev) => !prev);
  };

  return (
    <>
      <CommentContainer>
        <CommentFigure>
          <img
            src="https://secure.gravatar.com/avatar/2827e9b0abb5e6bf7605097b74484a75?s=70&d=mm&r=g"
            alt="user"
          />
        </CommentFigure>
        <CommentInnerContainer>
          <UsernameContainer>
            <UsernameInnerContainer>
              <h5>John Doe</h5>
              <span>2 days ago</span>
            </UsernameInnerContainer>
            <ReplyContainer>
              <Reply onClick={handleShowReply} />
              <span onClick={handleShowReply}>Reply</span>
            </ReplyContainer>
          </UsernameContainer>
          <CommentText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </CommentText>
        </CommentInnerContainer>
      </CommentContainer>
      {viewForm && <CommentForm />}
    </>
  );
};

const BlogComments = () => {
  return (
    <BlogCommentsContainer>
      <BlogComment />
    </BlogCommentsContainer>
  );
};

export default BlogComments;
