import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import history from "./data/history.json";
// import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div>
      <WarningSign alert="messaggio di alert" />
      <MyBadge title="ciao sono un Badge!" color="danger" />
      <BookList list={history} />
      {/* <SingleBook list={history[0]} /> */}
      {/* <BookList /> */}
    </div>
  );
}

export default App;
