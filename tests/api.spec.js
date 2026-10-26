//API Testing
import { test, expect, request } from "@playwright/test";
import authData from "../data/auth.json";
import postData from "../data/post.json";
import putData from "../data/put.json";

//Global variable
var bearerToken = "";
var bookingID = "";

test.describe.serial("Booking API", async () => {
  // Auth (Post Method)
  test("Auth", async ({ request }) => {
    const response = await request.post(
      "https://restful-booker.herokuapp.com/auth",
      { data: authData },
    );
    const body = await response.json();
    console.log(body);
    bearerToken = await body.token;
    console.log("We Get the Bearer Token is", bearerToken);
    const statusCode = response.status();
    expect(statusCode).toEqual(200);
  });

  //Booking ID Details (Get Method)
  test("Get Booking ID Details", async ({ request }) => {
    const response = await request.get(
      "https://restful-booker.herokuapp.com/booking",
    );
    const body = await response.json();
    console.log(body);
    const statusCode = response.status();
    expect(statusCode).toEqual(200);
  });

  // Create New Booking
  test("Create New Booking", async ({ request }) => {
    const response = await request.post(
      "https://restful-booker.herokuapp.com/booking",
      { data: postData },
    );
    const body = await response.json();
    console.log(body);
    bookingID = body.bookingid;
    console.log(bookingID);
    const statusCode = response.status();
    expect(statusCode).toEqual(200);
  });

  //Booking Details by ID (Get Method)
  test("Booking Details by ID", async ({ request }) => {
    const response = await request.get(
      `https://restful-booker.herokuapp.com/booking/${bookingID}`,
    );
    const body = await response.json();
    console.log(body);
    const statusCode = response.status();
    expect(statusCode).toEqual(200);
  });

  // Update Booking Details (Put Method)
  test("Update Booking Dteails", async ({ request }) => {
    const response = await request.put(
      `https://restful-booker.herokuapp.com/booking/${bookingID}`,
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${bearerToken}`,
        },
        data: putData,
      },
    );
    const body = await response.json();
    console.log(body);
    const statusCode = response.status();
    expect(statusCode).toEqual(200);
  });

  //Delete Booking Details
  test("Delete Booking Details", async ({ request }) => {
    const response = await request.delete(
      `https://restful-booker.herokuapp.com/booking/${bookingID}`,
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${bearerToken}`,
        },
      },
    );
    const body = await response.text();
    console.log(body);
    const statusCode = response.status();
    expect(statusCode).toEqual(201);
  });
});
