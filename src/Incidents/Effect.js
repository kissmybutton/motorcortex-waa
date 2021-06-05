import MotorCortex from "@kissmybutton/motorcortex";
import compoAttributes from "../compoAttributes";


export default class MyEffect extends MotorCortex.Effect {

  getScratchValue() {
      if (this.attributeKey !== "transform") {
          console.log(this.attributeKey);
          //return anime.get(this.element, this.attributeKey);
      }

    /*  const obj = {};
      const transform = compoAttributes[this.attributeKey];
      const currentTransform = getMatrix2D(this.context.window, this.element);

      for (let i = 0; i < transform.length; i++) {
          obj[transform[i]] = Object.prototype.hasOwnProperty.call(
            currentTransform,
            transform[i]
          )
            ? currentTransform[transform[i]]
            : anime.get(this.element, transform[i]);
      }*/

      return 0;
  }

  onGetContext() {
    const options = {};+
    console.log(this,"THIS")
    if (
      Object.prototype.hasOwnProperty.call(compoAttributes, this.attributeKey)
    ) {
      const compoAttribute = compoAttributes[this.attributeKey];

      for (let i = 0; i < compoAttribute.length; i++) {
        if (
          !Object.prototype.hasOwnProperty.call(
            this.targetValue,
            compoAttribute[i]
          )
        ) {
          continue;
        }
        options[compoAttribute[i]] = [
          this.initialValue[compoAttribute[i]],
          this.targetValue[compoAttribute[i]],
        ];
      }
    } else {
      options[this.attributeKey] = [this.initialValue, this.targetValue];
    }
    console.log(options)
    this.target = this.element.animate(
      [{ transform: "scale(0)" }, { transform: "scale(1)" }],
      {
        duration: 1000,
        fill: "forwards",
        easing: "linear",
        ...((this.attrs || {}).attrs || {}),
        ...options,
      }
    );
    this.target.pause();
    /*this.target = anime({
          autoplay: false,
          duration: this.props.duration,
          easing: "linear",
          targets: this.element,
          ...((this.attrs || {}).attrs || {}),
          ...options,
      }); // handle first render initial values*/
  }


  onProgress(fraction, millisecond) {
    this.target.currentTime = 1000 * fraction;
     
  }
}
