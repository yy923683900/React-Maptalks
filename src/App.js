import React, { Component } from "react";
import * as maptalks from "maptalks";
import "maptalks/dist/maptalks.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    /* eslint-disable no-unused-vars */
    const map = new maptalks.Map("map", {
      center: [-0.113049, 51.498568],
      zoom: 14,
      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate:
          "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        attribution:
          '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="map" className="App-container" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://github.com/maptalks/maptalks.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Maptalks
          </a>
        </header>
      </div>
    );
  }
}

export default App;
