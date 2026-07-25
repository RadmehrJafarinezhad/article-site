import styled from "./ArticleContainer.module.css";

function ArticleContainer({ children }) {
  return (
    <div className={styled.articleContainer}>
        {children}
    </div>
  );
}

export default ArticleContainer;