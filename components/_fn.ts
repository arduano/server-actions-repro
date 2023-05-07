"use server";

let counter = 0;

export async function logOnTheServer() {
  console.log("Button clicked!");

  counter++;
  return counter;
}
