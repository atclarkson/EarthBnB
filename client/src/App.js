import { Fragment, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pagination from "./components/layout/Pagination";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Header from "./components/layout/Header";
//import Search from "./components/locations/Search";
import Locations from "./components/locations/Locations";
import Location from "./components/locations/Location";
import axios from "axios";

function App() {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [payload, setPayload] = useState({});

  const searchLocations = async (text) => {
    const res = await axios.get(
      "v1/listings?page=1&limit=100&sort_by=title&order=asc"
    );

    setLocations(res.data.content);
    console.log(locations);
    setPayload(res.data);
  };

  //Get number of locations

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = locations.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Router>
      <Fragment>
        <Header />
        <Home searchLocations={searchLocations} />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Fragment>
                {/*<Search searchLocations={searchLocations} />*/}
                <Locations locations={currentPosts} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={locations.length}
                  paginate={paginate}
                />
              </Fragment>
            </Route>

            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/location/:id'
              render={(props) => <Location {...props} />}
            />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
