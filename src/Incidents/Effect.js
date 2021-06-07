import MotorCortex from "@kissmybutton/motorcortex";
import compoAttributes from "../compoAttributes";


export default class WAA extends MotorCortex.Effect {

  getScratchValue() {
    if (this.attributeKey !== "transform") {
      return anime.get(this.element, this.attributeKey);
    }

    const obj = {};
    const transform = compoAttributes[this.attributeKey];
    const currentTransform = getMatrix2D(this.context.window, this.element);

    for (let i = 0; i < transform.length; i++) {
      obj[transform[i]] = Object.prototype.hasOwnProperty.call(
        currentTransform,
        transform[i]
      )
        ? currentTransform[transform[i]]
        : anime.get(this.element, transform[i]);
    }

    return obj;
  }

  onGetContext() {
    const options = {};
    if (
      Object.prototype.hasOwnProperty.call(compoAttributes, this.attributeKey)
    ) {
      const compoAttribute = compoAttributes[this.attributeKey];
      options.transform=[]
      for (let i = 0; i < compoAttribute.length; i++) {
        if (
          !Object.prototype.hasOwnProperty.call(
            this.targetValue,
            compoAttribute[i]
          )
        ) {
          continue;
        }
        options.transform = [
          `${options.transform[0] || ''} ${[compoAttribute[i]]}(${this.initialValue[compoAttribute[i]]})`
          ,
          `${options.transform[1] || ''} ${[compoAttribute[i]]}(${this.targetValue[compoAttribute[i]]})`
        ];

       
      }
    } else {
      options[this.attributeKey] = [this.initialValue, this.targetValue];
    }
    console.log(options)
    this.target = this.element.animate(
      [{ [this.attributeKey]: options[this.attributeKey][0] }, { [this.attributeKey]:  options[this.attributeKey][1] }],
      {
        duration: this.props.duration,
        fill: "forwards",
        easing: "linear",
      }
    );
    this.target.pause();

  }


  onProgress(fraction, millisecond) {
    this.target.currentTime = this.props.duration * fraction;
     
  }
}
