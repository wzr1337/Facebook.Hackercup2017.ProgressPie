#!/usr/bin/env node
import * as fs from 'fs';
import * as readline from 'readline';

class Vector2D {
    constructor(private x:number, private y:number) {
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    multiply(that: Vector2D) {
        return this.x * that.x + this.y * that.y;
    }

    /**
     * returns NaN for that.length()= 0
     */
    angle(that: Vector2D) {
        return Math.acos((this.multiply(that))/(this.length() * that.length()));
    }
}

// set some defaults
const originVec = new Vector2D(0,50); // origin vector
const radius = 50; // the maxium disctance a pixle can have to be coloed black

var lineNo = 0;
var lineReader = readline.createInterface({
  input: fs.createReadStream('progress_pie_in.txt')
});

var outStream = fs.createWriteStream('progress_pie_out.txt');

lineReader.on('line', function (line) {
  if (lineNo > 0) {
    var color:string = "white";
    let r = line.split(' ');
    let P:number = Number(r[0]);
    let candidate = new Vector2D(Number(r[1])-50, Number(r[2])-50); // transform coordinates to the center of the square (50,50)

    let angle = ((P < 50 ? 0 : Math.PI) + candidate.angle(originVec)) / (2 * Math.PI) * 100;
    
    // if the pixel is closer or equal in distance to the center than the maximum radius and at the same time, the angle bewteen the origin vector and the pixels vector is less or equal than the given angle in percent => it is a black one
    if ((candidate.length() <= radius) && angle <= P) {
        color = "black";
    }
    else {
        color = "white";
    }
    outStream.write("Case #" + lineNo + ": " + color + "\n");
  }
  lineNo++;
});
