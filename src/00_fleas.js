import p5 from "p5";
import * as dat from 'dat.gui';

export default function() {


    const containerElement = document.getElementById('p5');

    //Controls
    let controls = {
        threshold: 20,
        offset: 0.01,
        randmax: 200,
        rand: false
      };
    
      
    window.onload = function() {
        var gui = new dat.GUI();
        gui.add(controls, 'threshold', 0, 100);
        gui.add(controls, 'offset', 0, 0.2);
      };
    
    const sketch = (p) => {
        let res, offset, color, noise, b;

        res = p.createVector(window.innerWidth,window.innerHeight)
        offset = 0.0
        

        console.log(p)
    
        p.setup = function() {
            p.createCanvas(res.x, res.y)

            p.colorMode("hsb")
            color = p.color(162.59, 100, 100)
            p.background(color)
            console.log(p)
        };
    
        p.draw = function() {
            offset += controls.offset
            noise = p.noise(offset)*100
            // noise = p.map(noise, 0, 100, 0, 100)
            if (noise < controls.threshold) {b = 0} else {b = 100}
            color = p.color(162.59, 100, b)
            p.background(color)

            // if(p.frameCount%60==0){
            //     console.log(noise)
            // }
    
        };
    };
    
    
    new p5(sketch, containerElement);
    

}
