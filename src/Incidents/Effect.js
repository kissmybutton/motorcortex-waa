import MotorCortex from "@donkeyclip/motorcortex";
import compoAttributes from "../compoAttributes";
import getMatrix2D from "./matrix2d";

const { hasOwnProperty } = Object.prototype;

export default class WAA extends MotorCortex.Effect {
  getScratchValue() {
    const { getComputedStyle } = this.context.window;

    if (this.attributeKey !== "transform") {
      return getComputedStyle(this.element)[this.attributeKey];
    }

    const transformScratch = {};
    const currentTransform = getMatrix2D(this.context.window, this.element);

    for (const attr of compoAttributes[this.attributeKey]) {
      transformScratch[attr] = hasOwnProperty.call(currentTransform, attr)
        ? currentTransform[attr]
        : getComputedStyle(this.element)[attr];
    }

    return transformScratch;
  }

  onGetContext() {
    this.options = {};
    if (hasOwnProperty.call(compoAttributes, this.attributeKey)) {
      for (const attr of compoAttributes[this.attributeKey]) {
        if (!hasOwnProperty.call(this.targetValue, attr)) {
          continue;
        }
        this.options.transform = [];
        this.options.transform[0] ??= "";
        this.options.transform[1] ??= "";
        this.options.transform[0] += ` ${[attr]}(${this.initialValue[attr]})`;
        this.options.transform[1] += ` ${[attr]}(${this.targetValue[attr]})`;
      }
    } else {
      this.options[this.attributeKey] = [this.initialValue, this.targetValue];
    }

    this.context.CSSAnimationLayer ??= {};
    this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id] ??= {};
    this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][
      this.attributeKey
    ] = {
      start: this.options[this.attributeKey][0],
      end: this.options[this.attributeKey][1],
    };
    this.checkAnimation();
  }

  createAnimation() {
    this.creating = true;
    /* clear all previus animations to avoid memory leak */
    if (this.target)
      this.target.startTime =
        this.context.window.document.timeline.currentTime -
        this.target.currentTime * this.target.playbackRate;
    /* create the new animation */

    this.target = this.element.animate(
      [
        { [this.attributeKey]: this.options[this.attributeKey][0] },
        { [this.attributeKey]: this.options[this.attributeKey][1] },
      ],
      {
        duration: this.props.duration,
        fill: "forwards",
        easing: "linear",
      }
    );
    this.target.pause();
    /* add the new animations info to the context */
    this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][
      this.attributeKey
    ] = {
      start: this.options[this.attributeKey][0],
      end: this.options[this.attributeKey][1],
    };
    this.creating = false;
  }

  checkAnimation() {
    const { start, end } =
      this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id][
        this.attributeKey
      ];
    if (
      start !== this.options[this.attributeKey][0] ||
      end !== this.options[this.attributeKey][1] ||
      !this.target
    ) {
      this.createAnimation();
    }
  }
  onProgress(fraction) {
    if (this.creating) return;
    this.checkAnimation();
    this.target.currentTime = this.props.duration * fraction;
  }
}
