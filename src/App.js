import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
// import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </>
    );
}

export default App;
