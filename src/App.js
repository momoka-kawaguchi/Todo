import styled from 'styled-components';



const Todo = (props) => {
  return (
    <StyledArticle>
      <input type="checkbox" />
      <label>{ props.title }</label>
    </StyledArticle>
  )
};

const TodoList = (props) => {
  return (
    <StyledArticle>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Todo title="インターンの申し込み" />
      <Todo title="ゼミ資料作成" />
      <Todo title="Progate進める" />
      <Todo title="就活ES作成" />
    </StyledArticle>
  )
};

const App = () => {
  return (
    <div className="App">
    <h1>Todoリスト⭐️</h1>
      <TodoList
        title="今週やること！！"
        content="眠くてもやらないと…"
      />
    </div>
  );
};

export default App;

const StyledArticle = styled.article`
  background-color: #fff;
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 16px;

  h2 {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.9);
  }
`;
