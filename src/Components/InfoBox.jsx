/* eslint-disable react/prop-types */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function InfoBox({ weatherInfo }) {
  //   console.log(weatherInfo);
  let HOT_URL =
    "https://media.istockphoto.com/id/485615032/photo/golden-larch-trees.jpg?s=1024x1024&w=is&k=20&c=I_-jf2knhX5RugoK-T36kKfupHWMtrmAYL5VzSeniP8=";
  let COLD_URL =
    "https://media.istockphoto.com/id/494737604/photo/winter-background-wooden-floor-and-defocused-winter-landscape-on-background.jpg?s=1024x1024&w=is&k=20&c=frW0MAAA3CeYATat-z7-T8parWDiHlH3dAtbke621eo=";
  let RAIN_URL =
    "https://media.istockphoto.com/id/1388636452/photo/rain-drop-infront-of-mango-bud.jpg?s=1024x1024&w=is&k=20&c=ZiTSjzn40BxqjPL0_3-f-7x0y_pmKqDtaPTo6j83RKk=";
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={
            weatherInfo.humidity > 80
              ? RAIN_URL
              : weatherInfo.temp > 15
              ? HOT_URL
              : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {weatherInfo.city.toUpperCase()}
            <span style={{ marginLeft: "0.5rem" }}>
              {" "}
              {weatherInfo.humidity > 80 ? (
                <ThunderstormIcon />
              ) : weatherInfo.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature : {weatherInfo.temp}&deg;C </p>
            <p> Min Temp : {weatherInfo.minTemp}&deg;C</p>
            <p> Max Temp : {weatherInfo.maxTemp}&deg;C</p>
            <p> Humidity : {weatherInfo.humidity}</p>
            <p>
              The Weather can be described as{" "}
              <i style={{ marginRight: "0.3rem" }}>{weatherInfo.description}</i>
              and feels like {weatherInfo.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default InfoBox;
