import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import MapFeatures from "../assets/Mapfeatures.json";

const MapComponent = () => {
  const [polygonColors, setPolygonColors] = useState({});

  const getColor = (id) => {
    if (id.match(/^[A-H]/i)) {
      return "#C70000";
    } else if (id.match(/^[I-Q]/i)) {
      return "#1F51FF";
    } else if (id.match(/^[R-Z]/i)) {
      return "#4CAF50";
    }
    return "#D3D3D3";
  };

  const legendColors = ["#C70000", "#1F51FF", "#4CAF50"];
  const legendTexts = ["100m Users", "200m Users", "300m Users"];

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <div>
        {/* Map Container */}
        <ComposableMap width={1000} height={680} projectionConfig={{ scale: 280, center: [5, 8] }}>
          <Geographies geography={MapFeatures}>
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <Geography
                  key={index}
                  geography={geo}
                  fill={polygonColors[geo.id] || getColor(geo.id)} 
                  stroke="#000000"
                  strokeWidth={2}
                >
                  <title>{geo.properties.name}</title>
                </Geography>
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "black", 
          fontSize: "10px",
          width: "100%",
        }}
      >
        {/* Legend Container */}
        <div style={{ textAlign: "center" }}>
          {legendColors.map((color, index) => (
            <div key={index} style={{ display: "inline-block", margin: "0 10px" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: color,
                  display: "inline-block",
                  border: "1px solid black", // Add border for stroke
                }}
              ></div>
              {/* Render legend text from the legendTexts array */}
              <span style={{ marginLeft: "5px" }}>{legendTexts[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
