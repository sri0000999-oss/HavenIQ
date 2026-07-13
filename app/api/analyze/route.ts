import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { address } = await request.json();

    if (!address) {
      return NextResponse.json(
        { error: "Property URL is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RAPIDAPI_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "RapidAPI key not found." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://zllw-working-api.p.rapidapi.com/pro/byurl?url=${encodeURIComponent(
        address
      )}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "zllw-working-api.p.rapidapi.com",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const text = await response.text();

      return NextResponse.json(
        {
          error: "RapidAPI request failed.",
          details: text,
        },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

  console.log("PROPERTY DETAILS KEYS:");
console.log(Object.keys(data.propertyDetails)); 
 
console.log("NEARBY HOMES:");
console.log(data.propertyDetails.nearbyHomes);

console.log("ADDRESS:");
console.dir(data.propertyDetails.address, { depth: null });

console.log("PRICE:");
console.log(data.propertyDetails.price);

console.log("BEDROOMS:");
console.log(data.propertyDetails.bedrooms);

console.log("BATHROOMS:");
console.log(data.propertyDetails.bathrooms);

console.log("YEAR BUILT:");
console.log(data.propertyDetails.yearBuilt);

console.log("RESO FACTS:");
console.dir(data.propertyDetails.resoFacts, { depth: 1 });
return NextResponse.json(data);
  } catch (err) {               
    console.error(err);

    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}