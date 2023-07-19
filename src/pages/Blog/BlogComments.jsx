import { Reply } from "@mui/icons-material";
import React, { useState } from "react";
import {
  BlogCommentsContainer,
  CommentContainer,
  CommentFigure,
  CommentInnerContainer,
  CommentText,
  RepliesContainer,
  ReplyContainer,
  ReplyDiv,
  UsernameContainer,
  UsernameInnerContainer,
} from "./BlogComments.styled";
import CommentForm from "./CommentForm";

const BlogComment = ({ comment, type }) => {
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
              <h5>{comment?.username}</h5>
              <span>{comment?.date}</span>
            </UsernameInnerContainer>
            {type === "comment" && (
              <ReplyContainer>
                <Reply onClick={handleShowReply} />
                <span onClick={handleShowReply}>Reply</span>
              </ReplyContainer>
            )}
          </UsernameContainer>
          <CommentText>{comment?.comment}</CommentText>
        </CommentInnerContainer>
      </CommentContainer>
      {viewForm && <CommentForm />}
    </>
  );
};

const BlogComments = ({ comments }) => {
  return (
    <BlogCommentsContainer>
      {/* <BlogComment /> */}
      {comments?.length &&
        comments?.map((comment, i) => {
          return (
            <div key={i}>
              <BlogComment comment={comment} type="comment" />
              <RepliesContainer>
                {comment?.replies?.length &&
                  comment?.replies?.map((reply, i) => {
                    return (
                      <ReplyDiv key={i}>
                        <BlogComment comment={reply} type="reply" />
                      </ReplyDiv>
                    );
                  })}
              </RepliesContainer>
            </div>
          );
        })}
    </BlogCommentsContainer>
  );
};

export default BlogComments;
