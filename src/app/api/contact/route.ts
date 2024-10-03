import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth"; // Ensure this path points to your auth options
import { connectToDatabase } from "~/server/database"; // Adjust this import based on your project structure


export async function POST(req, res) {
  // Get the session to check if the user is authenticated
  const session = await getServerSession(authOptions);

  // If no session, return a 401 Unauthorized response
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const jsonData = JSON.stringify(data);
    
    // Connect to the database
    const cached = await connectToDatabase();
    const db = cached.conn.db;

    // Insert the data into the "Contactos" collection
    const result = await db.collection("Contactos").insertOne(data);

    // Return success response
    return NextResponse.json({ data: jsonData, result }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error occurred" }, { status: 400 });
  }
}
