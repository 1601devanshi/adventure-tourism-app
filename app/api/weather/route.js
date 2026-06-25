import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json(
      {
        error: "Latitude and Longitude are required",
      },
      {
        status: 400,
      }
    );
  }

  const API_KEY = process.env.OPENWEATHER_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      {
        error: "API key missing",
      },
      {
        status: 500,
      }
    );
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    return NextResponse.json({
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed * 3.6),
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      city: data.name,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to fetch weather",
      },
      {
        status: 500,
      }
    );
  }
}