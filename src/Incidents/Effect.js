import MotorCortex from "@donkeyclip/motorcortex";
import compoAttributes from "../compoAttributes";
import getMatrix2D from "./matrix2d";

const { hasOwnProperty } = Object.prototype;

export default class WAA extends MotorCortex.Effect {
  getScratchValue() {
    if (this.attributeKey !== "transform") {
      return this.context.window.getComputedStyle(this.element)[
        this.attributeKey
      ];
    }

    const obj = {};
    const transform = compoAttributes[this.attributeKey];
    const currentTransform = getMatrix2D(this.context.window, this.element);

    for (let i = 0; i < transform.length; i++) {
      obj[transform[i]] = hasOwnProperty.call(currentTransform, transform[i])
        ? currentTransform[transform[i]]
        : this.context.window.getComputedStyle(this.element)[transform[i]];
    }

    return obj;
  }

  onGetContext() {
    this.initialized = false;
    this.options = {};
    if (hasOwnProperty.call(compoAttributes, this.attributeKey)) {
      for (const attr of compoAttributes[this.attributeKey]) {
        if (!hasOwnProperty.call(this.targetValue, attr)) {
          continue;
        }
        this.options.transform ??= [];
        this.options.transform[0] ??= "";
        this.options.transform[1] ??= "";
        this.options.transform[0] += ` ${[attr]}(${
          this.initialValue[attr] || 0
        })`;
        this.options.transform[1] += ` ${[attr]}(${this.targetValue[attr]})`;
      }
    } else {
      this.options[this.attributeKey] = [this.initialValue, this.targetValue];
    }
    this.context.CSSAnimationLayer ??= {};
    this.context.CSSAnimationLayer[this.element.dataset.motorcortex2Id] ??= {};
  }

  createAnimation() {
    this.creating = true;
    /* clear all previous animations to avoid memory leak */
    if (this.animation)
      this.animation.startTime =
        this.context.window.document.timeline.currentTime -
        this.animation.currentTime * this.animation.playbackRate;

    /* create the new animation */
    this.animation = this.element.animate(
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
    this.animation.pause();

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
      ] || {};
    if (
      start !== this.options[this.attributeKey][0] ||
      end !== this.options[this.attributeKey][1]
    ) {
      this.createAnimation();
    }
  }

  onProgress(fraction) {
    if (this.creating) return;
    this.checkAnimation();

    this.animation.currentTime = this.props.duration * fraction;
  }
}
