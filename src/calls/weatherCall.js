import { get } from "axios";
import { load } from "cheerio";
const jsonframe = require("jsonframe-cheerio");

async function getWeatherToday() {
  try {
    const resToday = await get(
      "https://www.accuweather.com/tr/tr/aliaga/318256/hourly-weather-forecast/318256"
    );
    const { data } = resToday;
    const $ = load(data);
    jsonframe($);
    const frame = {
      today: {
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
    const weatherdataToday = await $("body").scrape(frame);
    const { today } = weatherdataToday;
    return today;
  } catch (error) {
    console.log(error);
  }
}

async function getWeatherTomorrow() {
  try {
    const resTomorrow = await get(
      "https://www.accuweather.com/tr/tr/aliaga/318256/hourly-weather-forecast/318256?day=2"
    );
    const { data } = resTomorrow;
    const $ = load(data);
    jsonframe($);
    const frame = {
      tomorrow: {
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
    const weatherdataTomorrow = await $("body").scrape(frame);
    const { tomorrow } = weatherdataTomorrow;
    return tomorrow;
  } catch (error) {
    console.log(error);
  }
}

async function getWeatherOtherDay() {
  try {
    const resOtherDay = await get(
      "https://www.accuweather.com/tr/tr/aliaga/318256/hourly-weather-forecast/318256?day=3"
    );
    const { data } = resOtherDay;
    const $ = load(data);
    jsonframe($);
    const frame = {
      otherDay: {
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
    const weatherdataOtherDay = await $("body").scrape(frame);
    const { otherDay } = weatherdataOtherDay;
    return otherDay;
  } catch (error) {
    console.log(error);
  }
}

export { getWeatherToday, getWeatherTomorrow, getWeatherOtherDay };
