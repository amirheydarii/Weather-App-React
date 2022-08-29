import Header from "./components/Header";
import Main from "./components/Main";
import useAxios from "./network";

function App() {
  let url ='https://jsonplaceholder.typicode.com/todos/1';
  const {state, error, loading} = useAxios(url)

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
