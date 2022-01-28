import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import Table from '../Table/Table.jsx';
import Question from "../Question.jsx";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <section className="container">
          <Routes>

            <Route path='/' element={<Table />} />
            <Route path='/question/:id' element={<Question />} />

          </Routes>
        </section>

      </BrowserRouter>
    </Provider>
  );
}

export default App;

