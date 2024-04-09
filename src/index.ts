import Main from "./main";

var htmlCanvas = document.querySelector("canvas") as HTMLCanvasElement;

if (!htmlCanvas.getContext("2d")) {
    throw new Error("Your browser does not support Canvas 2d");
}

Main.main(htmlCanvas)