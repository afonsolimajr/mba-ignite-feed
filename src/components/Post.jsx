import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content, comments }) {
  const [commentsMemory, setCommentsMemory] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    const newCommentObj = {
      content: newComment,
      publishedAt: new Date().toISOString(),
      author: {
        avatarUrl: "https://github.com/dsenvolva.png",
        name: "Dsenvolva Tecnologia",
      },
    };

    console.log(newCommentObj);

    setCommentsMemory((prev) => {
      return [...prev, newCommentObj];
    });

    setNewComment("");
  }

  function handleNewCommentChange() {
    setNewComment(event.target.value);
  }

  function handleOnDeleteComment(comment) {
    console.log("delete", comment);
    const newValue = commentsMemory.filter((com) => {
      return com.content !== comment.content;
    });

    setCommentsMemory(newValue);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}

        <div className={styles.horizontal}>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </div>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentsMemory.map((comment) => {
          return (
            <Comment
              key={comment.content}
              content={comment.content}
              author={comment.author}
              publishedAt={comment.publishedAt}
              onDeleteComment={() => handleOnDeleteComment(comment)}
            />
          );
        })}
      </div>
    </article>
  );
}
