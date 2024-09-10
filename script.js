let trafficLightColor = prompt(
  "Please enter the current color of the traffic light (red, yellow, green):"
);

if (trafficLightColor === "red") {
  console.log("Stop");
} else if (trafficLightColor === "yellow") {
  console.log("Slow down");
} else if (trafficLightColor === "green") {
  console.log("Go");
} else {
  console.log("Invalid color");
}
