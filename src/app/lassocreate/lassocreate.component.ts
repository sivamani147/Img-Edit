import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import * as createjs from 'createjs-module';

@Component({
  selector: 'app-lassocreate',
  templateUrl: './lassocreate.component.html',
  styleUrls: ['./lassocreate.component.css']
})
export class LassocreateComponent implements OnInit, AfterViewInit {
  title = 'mypro';
  wbmode = '';
  blkinside = true;
  stage: createjs.Stage;
  isDrawing;
  drawingCanvas;
  oldPt;
  oldMidPt;
  image;
  bitmap: createjs.Bitmap;
  maskFilter;
  cursor;
  text1;
  blur;
  canvas: HTMLCanvasElement;
  container: createjs.Container;
  points;
  lpoints;
  mx;
  my;
  offsetX;
  offsetY;
  ctx: CanvasRenderingContext2D;
  cw;
  ch;
  $canvas;
  canvasOffset;
  s: createjs.Shape;
  rectSize = 60;
  state = [];
  stateindex: number;

  mode = 'tobw';
  pointrect: createjs.Shape;
  // tslint:disable-next-line:max-line-length
  r = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 17, 18, 19, 19, 20, 21, 22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 49, 52, 54, 55, 57, 59, 60, 62, 65, 67, 69, 70, 72, 74, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 107, 109, 111, 112, 116, 118, 120, 124, 126, 127, 129, 133, 135, 136, 140, 142, 143, 145, 149, 150, 152, 155, 157, 159, 162, 163, 165, 167, 170, 171, 173, 176, 177, 178, 180, 183, 184, 185, 188, 189, 190, 192, 194, 195, 196, 198, 200, 201, 202, 203, 204, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 218, 219, 219, 220, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 229, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 242, 243, 244, 244, 245, 245, 245, 246, 247, 247, 248, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
  // tslint:disable-next-line:max-line-length
  g = [0, 0, 1, 2, 2, 3, 5, 5, 6, 7, 8, 8, 10, 11, 11, 12, 13, 15, 15, 16, 17, 18, 18, 19, 21, 22, 22, 23, 24, 26, 26, 27, 28, 29, 31, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40, 41, 43, 44, 44, 45, 46, 47, 48, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 83, 84, 85, 86, 88, 89, 90, 92, 93, 94, 95, 96, 97, 100, 101, 102, 103, 105, 106, 107, 108, 109, 111, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 140, 141, 142, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 157, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 186, 186, 187, 188, 189, 190, 192, 193, 194, 195, 195, 196, 197, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 219, 219, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 231, 232, 232, 232, 233, 234, 235, 235, 236, 236, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 242, 243, 244, 245, 245, 246, 246, 247, 247, 248, 249, 249, 249, 250, 251, 251, 252, 252, 252, 253, 254, 255];
  // tslint:disable-next-line:max-line-length
  b = [53, 53, 53, 54, 54, 54, 55, 55, 55, 56, 57, 57, 57, 58, 58, 58, 59, 59, 59, 60, 61, 61, 61, 62, 62, 63, 63, 63, 64, 65, 65, 65, 66, 66, 67, 67, 67, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 73, 74, 74, 75, 75, 76, 77, 77, 78, 78, 79, 79, 80, 81, 81, 82, 82, 83, 83, 84, 85, 85, 86, 86, 87, 87, 88, 89, 89, 90, 90, 91, 91, 93, 93, 94, 94, 95, 95, 96, 97, 98, 98, 99, 99, 100, 101, 102, 102, 103, 104, 105, 105, 106, 106, 107, 108, 109, 109, 110, 111, 111, 112, 113, 114, 114, 115, 116, 117, 117, 118, 119, 119, 121, 121, 122, 122, 123, 124, 125, 126, 126, 127, 128, 129, 129, 130, 131, 132, 132, 133, 134, 134, 135, 136, 137, 137, 138, 139, 140, 140, 141, 142, 142, 143, 144, 145, 145, 146, 146, 148, 148, 149, 149, 150, 151, 152, 152, 153, 153, 154, 155, 156, 156, 157, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 164, 164, 165, 165, 166, 166, 167, 168, 168, 169, 169, 170, 170, 171, 172, 172, 173, 173, 174, 174, 175, 176, 176, 177, 177, 177, 178, 178, 179, 180, 180, 181, 181, 181, 182, 182, 183, 184, 184, 184, 185, 185, 186, 186, 186, 187, 188, 188, 188, 189, 189, 189, 190, 190, 191, 191, 192, 192, 193, 193, 193, 194, 194, 194, 195, 196, 196, 196, 197, 197, 197, 198, 199];
  moving: boolean;
  lastX: any;
  lastY: any;
  seccanv: HTMLCanvasElement;
  secontext: CanvasRenderingContext2D;
  imagesource = '../../assets/456.jpg';
  mastImg: HTMLImageElement;
  crosshair: createjs.Shape;
  mgmtst: string;
  images: HTMLImageElement;


  ngOnInit() { }

  ngAfterViewInit() {
    this.canvas = document.getElementById('testCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.$canvas = $('#testCanvas');
    this.canvasOffset = this.$canvas.offset();

    this.offsetX = this.canvasOffset.left;
    this.offsetY = this.canvasOffset.top;

    this.stage = new createjs.Stage(this.canvas);
    this.container = new createjs.Container();
    this.points = [];
    this.lpoints = [];
    this.cw = this.canvas.width;
    this.ch = this.canvas.height;

    this.image = new Image();
    this.image.onload = this.handleComplete;
    this.image.src = this.imagesource;

    this.seccanv = document.createElement('canvas');
    this.seccanv.height = this.canvas.height;
    this.seccanv.width = this.canvas.width;
    this.secontext = this.seccanv.getContext('2d');
  }

  handleComplete = () => {
    createjs.Touch.enable(this.stage);
    this.stage.enableMouseOver();
    this.stage.snapToPixelEnabled = true;
    this.mastImg = new Image();
    this.mastImg.src = this.imagesource;
    this.secontext.drawImage(this.mastImg, 0, 0, this.canvas.width, this.canvas.height);
    this.stage.addEventListener('stagemousedown', this.handleMouseDown);
    this.stage.addEventListener('stagemouseup', this.handleMouseUp);
    this.stage.addEventListener('stagemousemove', this.handleMouseMove);

    const scaleFactor = 1.1;
    this.canvas.addEventListener('mousewheel', (evt) => {
    }, false);
    this.bitmap = new createjs.Bitmap(this.image);
    this.bitmap.scaleX = this.canvas.width / this.image.width;
    this.bitmap.scaleY = this.canvas.height / this.image.height;
    // this.bitmap.cache(0, 0, this.image.width, this.image.height);
    this.container.addChild(this.bitmap);
    this.cursor = new createjs.Shape(
      new createjs.Graphics().beginFill('rgba(0,255,0,0.9)').drawCircle(0, 0, 8)
    );
    this.pointrect = new createjs.Shape(new createjs.Graphics().beginFill('rgba(0,0,0,0.5)').drawRect(0, 0, this.rectSize, this.rectSize));
    this.crosshair = new createjs.Shape(new createjs.Graphics().beginFill('rgba(0,0,0,0.1)').drawRect(0, 0, 1, 1));

    this.crosshair.cursor = 'crosshair';
    this.cursor.cursor = 'none';
    this.pointrect.cursor = 'grab';
    this.stage.addChild(this.container);
    this.stage.update();
    this.stage.removeChild(this.pointrect);
    this.stage.update();
    // this.container.cache(0, 0, this.canvas.width, this.canvas.height);
    this.state.push(this.canvas.toDataURL());
    this.stateindex = this.state.length;
  }
  handleMouseDown = e => {
    if (this.wbmode === 'Linelassoo') {
      this.crosshair.x = this.stage.mouseX;
      this.crosshair.y = this.stage.mouseY;
      this.lpoints.push({x: this.stage.mouseX, y: this.stage.mouseY});
      if (this.lpoints.length > 1) {
        // tslint:disable-next-line:max-line-length
        this.container.addChild(new createjs.Shape(new createjs.Graphics().setStrokeDash([4]).setStrokeStyle(1.5).beginStroke('white').moveTo(this.lpoints[this.lpoints.length - 2].x, this.lpoints[this.lpoints.length - 2].y).lineTo(this.lpoints[this.lpoints.length - 1].x, this.lpoints[this.lpoints.length - 1].y)));
      }
      this.stage.update();
    }
    if (this.wbmode === 'lassoo') {
    this.oldPt = new createjs.Point(this.stage.mouseX, this.stage.mouseY);
    this.oldMidPt = this.oldPt;
    this.isDrawing = true;
    this.mx = parseInt(e.nativeEvent.clientX, 0) - parseInt(this.offsetX, 0);
    this.my = parseInt(e.nativeEvent.clientY, 0) - parseInt(this.offsetY, 0);
    this.points.push({ x: this.stage.mouseX, y: this.stage.mouseY });
    }
    if (this.wbmode === 'color') {
      this.moving = true;
      this.lastX = this.stage.mouseX;
      this.lastY = this.stage.mouseY;
    }
    if (this.wbmode === 'erase') {
      this.moving = true;
      this.lastX = this.stage.mouseX;
      this.lastY = this.stage.mouseY;
    }
  }
  handleMouseMove = event => {
    this.stage.removeChild(this.pointrect);
    this.stage.removeChild(this.cursor);
    this.stage.removeChild(this.crosshair);
    if (this.wbmode === 'Linelassoo') {
      this.stage.addChild(this.crosshair);
      this.crosshair.x = this.stage.mouseX;
      this.crosshair.y = this.stage.mouseY;
      this.stage.update();
    }
    if (this.wbmode === 'lassoo') {
    this.stage.addChild(this.cursor);
    this.cursor.x = this.stage.mouseX;
    this.cursor.y = this.stage.mouseY;
    if (!this.isDrawing) {
      this.stage.update();
     // console.log(this.container.children);
      return;
    } else {
      this.points.push({ x: this.stage.mouseX, y: this.stage.mouseY });
      const midPoint = new createjs.Point(
        (this.oldPt.x + this.stage.mouseX) / 2,
        (this.oldPt.y + this.stage.mouseY) / 2
      );

      this.s = new createjs.Shape();
      this.s.graphics
        .beginBitmapStroke(this.bitmap)
        .setStrokeStyle(1, 'round', 'round')
        .setStrokeDash([7])
        .beginStroke('white')
        .moveTo(midPoint.x, midPoint.y)
        .curveTo(this.oldPt.x, this.oldPt.y, this.oldMidPt.x, this.oldMidPt.y);

      this.container.addChild(this.s);
      this.oldPt.x = this.stage.mouseX;
      this.oldPt.y = this.stage.mouseY;
      this.oldMidPt.x = midPoint.x;
      this.oldMidPt.y = midPoint.y;

      }
      this.stage.update();
    }
    if (this.wbmode === 'color') {
      this.stage.addChild(this.pointrect);
      this.pointrect.y = this.stage.mouseY - this.rectSize / 2;
      this.pointrect.x = this.stage.mouseX - this.rectSize / 2;
      if (this.moving) {
      // tslint:disable-next-line:max-line-length
      const imag = this.secontext.getImageData( this.stage.mouseX - this.rectSize / 2,  this.stage.mouseY - this.rectSize / 2, this.rectSize, this.rectSize);
      const img1 = document.createElement('img');

      img1.src = this.getImageURL(imag, this.rectSize, this.rectSize, true);
      const crimg = new createjs.Bitmap(img1);
      crimg.x = this.stage.mouseX - ((this.rectSize + 1) / 2);
      crimg.y = this.stage.mouseY - ((this.rectSize + 1) / 2);
      this.container.addChild(crimg);
      this.stage.update();
      }
      this.stage.update();
    }
    if (this.wbmode === 'erase') {
      this.stage.addChild(this.pointrect);
      this.stage.update();
      this.pointrect.y = this.stage.mouseY - this.rectSize / 2;
      this.pointrect.x = this.stage.mouseX - this.rectSize / 2;
      if (this.moving) {
      // tslint:disable-next-line:max-line-length
      const x = this.stage.mouseX - ((this.rectSize + 1) / 2);
      const y = this.stage.mouseY - ((this.rectSize + 1) / 2);
      const erimg = new createjs.Shape(new createjs.Graphics().beginFill('red').drawRect(x, y, this.rectSize, this.rectSize));
      this.container.addChild(erimg);
      }
    }
  }

  handleMouseUp = event => {
    if (this.wbmode === 'lassoo') {
    this.isDrawing = false;
    this.stage.update();
    }
    if (this.wbmode === 'color') {
      this.moving = false;
      this.lastX = this.stage.mouseX;
      this.lastY = this.stage.mouseY;
      this.stage.removeChild(this.pointrect);
      this.stage.update();
      this.state.push(this.canvas.toDataURL());
      this.stateindex = this.state.length;
      this.stage.addChild(this.pointrect);
      this.stage.update();
    }
    if (this.wbmode === 'erase') {
      this.moving = false;
      this.lastX = this.stage.mouseX;
      this.lastY = this.stage.mouseY;
    }
  }

  lclipIt() {
    if (this.points.length !== 0 || this.lpoints.length !== 0) {
      let minX = 1000000;
      let minY = 1000000;
      let lpoint;
      let maxX = -10000;
      let maxY = -10000;


      if (this.wbmode === 'lassoo') {
        lpoint = this.points;
      } else if (this.wbmode === 'Linelassoo') {
        lpoint = this.lpoints;
      }

      for (let i = 1; i < lpoint.length; i++) {
        const p = lpoint[i];
        if (p.x < minX) {
          minX = p.x;
        }
        if (p.y < minY) {
          minY = p.y;
        }
        if (p.x > maxX) {maxX = p.x; }
        if (p.y > maxY) {maxY = p.y; }

      }

      const tempCanvas = document.createElement('canvas');
      const tempContext = tempCanvas.getContext('2d');
      tempCanvas.width = this.canvas.width;
      tempCanvas.height = this.canvas.height;
      tempContext.clearRect(0, 0, this.cw, this.ch);
      tempContext.beginPath();
      tempContext.moveTo(lpoint[0].x, lpoint[0].y);
      for (let i = 1; i < lpoint.length; i++) {
        const p = lpoint[i];
        tempContext.lineTo(lpoint[i].x, lpoint[i].y);
      }
      tempContext.closePath();
      tempContext.clip();

      const setImg = new Image();

      let bitmpcnt = 0;
      for (let ii = 0; ii < this.container.children.length; ii++) {
          if (this.container.children[ii].constructor.name === 'Bitmap') {
            bitmpcnt++;
        }
      }
      while (this.container.children.length  !== bitmpcnt) {
        this.container.removeChildAt(bitmpcnt);
      }

      this.stage.removeChild(this.cursor);
      this.stage.removeChild(this.crosshair);
      this.stage.update();

      setImg.src = this.mastImg.src;

      setImg.onload = () => {
        tempContext.drawImage(this.mastImg, 0, 0, this.canvas.width, this.canvas.height);
        const clipimgval = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const c = document.createElement('canvas');
        const cx = c.getContext('2d');
        c.width = this.canvas.width;
        c.height = this.canvas.height;
        cx.drawImage(setImg, 0 , 0, this.canvas.width, this.canvas.height);
        const imag = cx.getImageData(0, 0, c.width, c.height);
        const backImg = new Image();
        const clippedImage = new Image();
        backImg.src = this.getImageURL(imag, c.width, c.height, !this.blkinside);
        clippedImage.src =  this.getImageURL(clipimgval, c.width, c.height, this.blkinside);
        backImg.onload = () => {
          if (!this.blkinside) {
          this.container.removeAllChildren();
          this.container.addChild(new createjs.Bitmap(backImg));
          this.stage.update();
          }
          clippedImage.onload = () => {
          lpoint.length = 0;
          this.lpoints.length = 0;
          this.points.length = 0;
          this.container.addChild(new createjs.Bitmap(clippedImage));
          this.stage.removeChild(this.crosshair);
          this.stage.removeChild(this.cursor);
          this.stage.update();
          this.state.push(this.canvas.toDataURL());
          this.stateindex = this.state.length;
          };
        };
      };
    }
  }

  getImageURL(imgData, width, height, bw: boolean) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    const data = imgData.data;
    const dataSize = data.length;
    let brightness = 0.0;

    if (bw) {
      if (this.mode === 'tobw') {
        for (let i = 0; i < dataSize; i = i + 4) {

          brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
          // brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
          data[i] = brightness;
          data[i + 1] = brightness;
          data[i + 2] = brightness;
        }
      } else if (this.mode === 'tocolor') {
        // do nothing if color selected.
      } else if (this.mode === 'tosepia') {
        let noise = 20;
        for (let i = 0; i < data.length; i += 4) {
          data[i] = this.r[data[i]];
          data[i + 1] = this.g[data[i + 1]];
          data[i + 2] = this.b[data[i + 2]];
          if (noise > 0) {
            noise = Math.round(noise - Math.random() * noise);

            for (let j = 0; j < 3; j++) {
              const iPN = noise + data[i + j];
              data[i + j] = (iPN > 255) ? 255 : iPN;
            }
          }
        }

      }
    }
    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
  }

  changedSlide() {
    this.pointrect.graphics.command['w'] = this.rectSize;
    this.pointrect.graphics.command['h'] = this.rectSize;
    this.stage.update();
  }

  changeopacity(val) {
    this.ctx.globalAlpha = val.target.value;
    this.stage.update();
    this.secontext.globalAlpha = val.target.value;
  }

  undomethod() {
    if (this.state.length >= 0 && this.stateindex >= 2 && this.mgmtst === 'backward') {
      this.container.removeAllChildren();
      const imgrdo = new Image();
      imgrdo.src = this.state[this.stateindex - 2];
      imgrdo.onload = () => {
        this.stateindex = this.stateindex - 1;
        this.container.addChild(new createjs.Bitmap(imgrdo));
        this.stage.update();
      };
     }
     if (this.state.length >= 0 && this.stateindex < this.state.length && this.mgmtst === 'forward') {
      this.container.removeAllChildren();
      const imgrdo = new Image();
      imgrdo.src = this.state[this.stateindex];
      imgrdo.onload = () => {
        this.stateindex = this.stateindex + 1;
        this.container.addChild(new createjs.Bitmap(imgrdo));
        this.stage.update();
      };
    }
  }

  savechanges() {
    this.stage.removeChild(this.pointrect);
    this.stage.update();
    this.state.push(this.canvas.toDataURL());
    this.stateindex = this.state.length;
    this.stage.removeChild(this.container);
    this.stage.update();
    this.container = new createjs.Container();
      const imgrdo = new Image();
      imgrdo.src = this.state[this.stateindex - 1];
      imgrdo.onload = () => {
        this.container.addChild(new createjs.Bitmap(imgrdo));
        this.stage.addChild(this.container);

        this.stage.update();
      };
  }

  modeSelectionChanged($event) {
    this.stage.removeChild(this.pointrect);
    this.stage.removeChild(this.cursor);
    this.stage.removeChild(this.crosshair);
    this.stage.update();
    this.wbmode = $event.target.value;
  }
}
