import React, { useEffect, useState } from 'react';
import MapData from './dataset/Map.json';
import { Box } from '@mui/material';
import SearchInput from './componants/SearchBar/SearchInput';
import Globe from 'react-globe.gl';

function App() {
  const [countries, setCountries] = useState([]);
  const [hoverD, setHoverD] = useState();

  useEffect(() => {
    // load data
    setCountries(MapData);
  }, []);

  const LabelData = (CountryName, CountryAbrv, CountryPop) => {
    return `
        <div style="background-color:rgba(0, 0, 0, 0.8); border-radius:10px; text-align:center;">
          <div style="padding:15px;">
            ${CountryName}(${CountryAbrv}): <br/>
            Population: ${CountryPop} <br/>
          <div/>
        <div/>
      `;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <SearchInput />
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        polygonsData={countries}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
        polygonCapColor={(d) => (d === hoverD ? '#ff7900' : '#ffffff')}
        polygonSideColor={() => 'rgba(0, 0, 150, 0.35)'}
        polygonStrokeColor={() => '#000'}
        polygonLabel={({ properties: d }) =>
          LabelData(d.ADMIN, d.ADM0_A3, d.POP_EST)
        }
        onPolygonHover={setHoverD}
        polygonsTransitionDuration={100}
      />
    </Box>
  );
}

export default App;
