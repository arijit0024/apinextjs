import { NextResponse } from 'next/server'


export async function GET() {
  const res = await fetch('https://dummyjson.com/products/1');
const data = await res.json();

const currentDate = new Date();
const formattedDate = currentDate.toISOString();

const responseWithDate = {
  data,  // Include existing data
  currentDate: formattedDate, // Add current date and time to the response
  key3 : "hello"
};

return NextResponse.json(responseWithDate);

}
export async function POST (req,res){
  const data  =await req.json()
  console.log(data.data3)

  return NextResponse.json(data.data3)
}
