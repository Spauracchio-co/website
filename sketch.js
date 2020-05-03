let myFont;
function preload() {
  myFont = loadFont('./font/ibm.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#FF480E');
  // cursor('data:image/png;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48aW1hZ2UgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBREtVbEVRVlI0bk8zYXpXdGNWUmpIOGMra1RmTlMwNW5XQ3EyeE5TMVlTaXNtdnFNVm9nZ2l0cElnZ2h1eGczK0E4Vjl3VTBRWGllQ2lCV0Z3SjdweDRWWW1PNWZadWRDVitBY0V3ZjExOGR6cmpKZEpNbzIwdWZmTytjSFozSG5oZkgvbk9jODk1em1IcEtTcXFZVXBITWNKek9SdE9uODJkWFJkZS9CcTRaZ0FQb2tMdUlsM3NJQjVZY3F4L0x1TlVrdU04S3lBL1J6WlVQc0R0L0NJTUtoUkpoVHc4emlONytUZ3E2dXIyZkx5OHJBUm42QXRqR3FFQ2NQd2orSjdaTzEyTzl2WjJja0tiVzV1RHB2d0tUb0dKdFJXWThFWDZ2VjZaUlBhWWpyVU1qR1c0WCt3RC93SUUvN0NpeUpmVEt2WlZCZ0pqNnpYNiswSlgyaHRiYTB3NFN1Y3had2FUWVU5NFpGMU9wMTlJNkFVQlQvaWNSRUZ4NDhHNS82MFo5ajMrLzEvcy8xQkpxeXZyeGNHM01WRmtRdE9IQkhUMkRwd3p1L3U3aDVvUXJmYkxlRC94aHRZRW0rRVNoc3dkc0xiejRRaCtBeWY0VG1EQ0pnK0VySXhkTi9aZnBRSkpmaXZ4ZWcvcmVJNTRGQ3Z1cklKcFhZWGI0dFg0T1g4ZitkVWNDMXdhUGhoRXpxZHpqRDhQYkU1ZWhWWGNVNUYxd0gvRzM3RW5MK0hkM0VEMTdDb29pdkJCd24vR3E3akNiRnBxdHhlNEdIQVgvQmYrTXFFZm9LWDRCTjhncDgwK0RsalZIS2FCazhzUEdiRkx1d2JFd1pQTEQwWHhGTDBWMlQ5Zm45aTRJdlJQNE5MY3BCSmdTYzZkbEtNL2tmeTJ2Mmt3QlBoZjBwMCtFdGtHeHNiRXdOUGxKNU9pNzM0VDhhbzVEWUp2aVU2K2hpdTREZnNtLzJiQkU4a3dIa3gvNjhaa1FDM3Q3ZXpyYTJ0ck52dFppc3JLNDJDSnpxNklJb1JIeU5iV2xvYUJUdXFqSFZURkROcUMwK3MvazZKZ3NRWFJzUCtpVi9FQ2U4ZHZDOXFlSytJcUNrWE0yb0R6K0FOc0NoT1pYN0h6L2hXd043R2gvZ0E3NG1MRGErTEF1YlYvSGUxaFdld0Fqd3ZnRjdHbXdMMGxnanp0MFRKK2daZUVDRi9XZVNOMnAvckY3dS9zM2hTaFBTellvUmZ3dk40Sm4vK1ZQNmQ4MkxEMUlpYkhWTUNZa0dZc0NpT3BpN2w3V0wrN0Z6K2VVZUF6NHJvcVZUMTlqQXF0c0V6QXF3dDlnUm54Tnh1RzF4bW1oV0xwdUptVjIxSHZhemlKdGUwd1JXMkdRRTdmSld0TWNCN3FWVnFTVWxKU1VsSlNVbEpTVWxKU1VsSlNVbEpTVWxKVmRjLzlHb0VHNXc0K3prQUFBQUFTVVZPUks1Q1lJST0iIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIvPjwvc3ZnPg==');
}

function draw() {
  stroke(0);
  strokeWeight(0.5);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
