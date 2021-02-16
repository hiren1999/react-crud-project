import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddUser from "./components/Home/AddUser";
import EditUser from "./components/Home/EditUser";
import Home from "./components/Home/Home";
// import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/users/:id' exact component={EditUser} />
                <Route path='/user/add' exact component={AddUser} />
                <Route path='/' exact component={Home} />
            </Switch>
        </>
    );
}

export default App;
