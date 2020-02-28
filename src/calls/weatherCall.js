import { get } from "axios";
import { load } from "cheerio";
const jsonframe = require("jsonframe-cheerio");

async function getWeather() {
  try {
    const res = await get(
      "https://www.accuweather.com/tr/tr/aliaga/318256/hourly-weather-forecast/318256"
    );

    const { data } = res;
    const $ = load(data);
    jsonframe($);
    const frame = {
      havatahmini: {
        _s: ".hourly-forecast-card",
        _d: [
          {
            hour: ".hourly-forecast-card-header .date p",
            date: ".hourly-forecast-card-header .date .sub",
            image: ".hourly-forecast-card-header img @ data-src",
            temp: ".metric",
            description: ".hourly-forecast-card-header span",
            precip: ".hourly-forecast-card-header .precip",
            realFeel:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(1)",
            wind:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(2)",
            highWind:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(3)",
            moisture:
              ".hourly-forecast-card-content .panel:nth-child(1) p:nth-child(4)",
            cloud:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(1)",
            rain:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(2)",
            snow:
              ".hourly-forecast-card-content .panel:nth-child(2) p:nth-child(3)"
          }
        ]
      }
    };
    const weatherdata = $("body").scrape(frame);
    const { havatahmini } = weatherdata;
    return havatahmini;
  } catch (error) {
    console.log(error);
  }
}

export { getWeather };
