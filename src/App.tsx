import "./App.css";

import * as maptalks from "maptalks";

import { GLTFLayer, GLTFMarker } from "@maptalks/gltf-layer";

import { GroupGLLayer } from "@maptalks/gl";
import { VectorTileLayer } from "@maptalks/vt";
import { useMount } from "react-use";

function App() {
  useMount(() => {
    initMap();
  });

  function initMap() {
    const map = new maptalks.Map("map", {
      center: [-74.00912099912109, 40.71107610933129],
      zoom: 16,
    });

    // 添加 vt 图层
    const vt = new VectorTileLayer("vt", {
      urlTemplate:
        "http://116.63.251.32:8080/tile/planet-single/{z}/{x}/{y}.mvt",
      spatialReference: "preset-vt-3857",
    });
    vt.setStyle({
      style: [
        {
          filter: [
            "all",
            ["==", "$layer", "building"],
            ["==", "$type", "Polygon"],
          ],
          renderPlugin: {
            dataConfig: {
              type: "fill",
            },
            sceneConfig: {},
            type: "fill",
          },
          symbol: {
            polygonBloom: false,
            polygonFill: [0.345, 0.345, 0.502, 1],
            polygonOpacity: 1,
            polygonPatternFile: null,
          },
        },
      ],
    });

    // 添加 gltf 图层
    const gltf = new GLTFLayer("gltf");
    const position = map.getCenter();
    const symbol = {
      url: "pyramid",
    };
    const markers = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const gltfmarker = new GLTFMarker(
          position.add(i * 0.01 - 0.015, j * 0.01 - 0.015),
          {
            symbol: symbol,
          }
        );
        markers.push(gltfmarker);
      }
    }

    gltf.addGeometry(markers);

    // 添加到 groupLayer
    const groupLayer = new GroupGLLayer("group", [vt, gltf]);
    groupLayer.addTo(map);
  }

  return <div className="map" id="map"></div>;
}

export default App;
