import { Component, OnInit } from '@angular/core';
declare const fabric: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  ngOnInit() {
    // const canvas = new fabric.Canvas('textcanvas', {
    //   backgroundColor: 'wheat',
    //   selection: true
    // });


    // const myCircles: any[] = [new fabric.Circle({
    //   radius: 10,
    //   fill: 'red',
    //   stroke: 'blue',
    //   top: 10,
    //   left: 20,
    //   selectable: true
    // }), new fabric.Circle({
    //   radius: 10,
    //   fill: 'red',
    //   stroke: 'blue',
    //   top: 50,
    //   left: 50,
    //   selectable: true
    // }), new fabric.Circle({
    //   radius: 10,
    //   fill: 'red',
    //   stroke: 'blue',
    //   top: 100,
    //   left: 80,
    //   selectable: true
    // }), new fabric.Circle({
    //   radius: 10,
    //   fill: 'red',
    //   stroke: 'blue',
    //   top: 130,
    //   left: 70,
    //   selectable: true
    // }), new fabric.Circle({
    //   radius: 10,
    //   fill: 'red',
    //   stroke: 'blue',
    //   top: 200,
    //   left: 80,
    //   selectable: true
    // })];
    // const rect = new fabric.Rect({
    //   width: 20,
    //   height: 50,
    //   left: 0,
    //   top: 50,
    //   selectable: false,
    //   fill: 'green',
    // });
    // let score = 0;
    // const scorecard = new fabric.Text('Score: ' + score.toString() , { left: 450, top: 10, fontSize: 10 });
    // // // const myCircle = new fabric.Circle({
    // // //   radius: 10,
    // // //   fill: 'red',
    // // //   stroke: 'blue',
    // // //   top: 50,
    // // //   left: 20,
    // // //   selectable: false
    // // // });
    // // // const rect = new fabric.Rect({
    // // //   width: 20,
    // // //   height: 30,
    // // //   left: 0,
    // // //   top: 50,
    // // //   selectable: false,
    // // //   fill: 'green',
    // // // });

    // myCircles.forEach(function(val) {
    //   val.holder = '+=' + Math.floor(Math.random() * (3 - 1) + 1) + '0';
    //   canvas.add(val);
    // });
    // canvas.add(rect);
    // canvas.add(scorecard);

    // (function () {
    //   function animator() {
    //     myCircles.forEach(function(myCircle) {

    //       if (myCircle.left <= 0) {
    //         // alert('game over');
    //         myCircle.holder = '+=20';
    //       // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length
    //       } else if (myCircle.left <= rect.width && (rect.top <= myCircle.top + myCircle.radius * 2 && ((rect.top + rect.height) >= myCircle.top))) {
    //         myCircle.holder = '+=' + Math.floor(Math.random() * (3 - 1) + 1) + '0';
    //         score += 1;
    //         scorecard.setText('Score: ' + score.toString());
    //       } else if (myCircle.left + 20 > canvas.width) {
    //         myCircle.holder = '-=10';
    //       }
    //       myCircle.animate('left', myCircle.holder, { duration: 100, onChange: canvas.renderAll.bind(canvas) });
    //     });
    //   }
    //   animator();
    //   setInterval(animator, 100);
    // })();

    // canvas.on('mouse:move', function (options) {
    //   const p = canvas.getPointer(options.e);
    //   rect.setTop(p.y - (rect.height / 2));
    // });
    // scorecard.on('selected', function(options) {
    //   console.log(canvas.toJSON());
    // });
  }
}
