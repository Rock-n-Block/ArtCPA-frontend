// import { SyntheticEvent } from 'react';
// import { Nullable, Optinable } from 'types';
// import { SliderProps } from './coreSlider';

// export function pauseEvent(e: SyntheticEvent) {
//   if (e && e.stopPropagation) {
//     e.stopPropagation();
//   }
//   if (e && e.preventDefault) {
//     e.preventDefault();
//   }
//   return false;
// }

// export function stopPropagation(e: SyntheticEvent) {
//   if (e.stopPropagation) {
//     e.stopPropagation();
//   }
// }

// export function sanitizeInValue(value: Optinable<number | number[]>) {
//   if (value === null || value === undefined) {
//     return [];
//   }
//   return Array.isArray(value) ? value.slice() : [value];
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function prepareOutValue(x: Nullable<any[]>) {
//   if (x === null) {
//     return x;
//   }
//   return x !== null && x.length === 1 ? x[0] : x.slice();
// }

// export function trimSucceeding(length: number, nextValue: number[], minDistance: number, max: number) {
//   for (let i = 0; i < length; i += 1) {
//     const padding = max - i * minDistance;
//     if (nextValue[length - 1 - i] > padding) {
//       // eslint-disable-next-line no-param-reassign
//       nextValue[length - 1 - i] = padding;
//     }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function trimPreceding(length: number, nextValue: any[], minDistance: number, min: number) {
//   for (let i = 0; i < length; i += 1) {
//     const padding = min + i * minDistance;
//     if (nextValue[i] < padding) {
//       // eslint-disable-next-line no-param-reassign
//       nextValue[i] = padding;
//     }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function addHandlers(eventMap: any) {
//   Object.keys(eventMap).forEach((key) => {
//     if (typeof document !== 'undefined') {
//       document.addEventListener(key, eventMap[key], false);
//     }
//   });
// }
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function removeHandlers(eventMap: any) {
//   Object.keys(eventMap).forEach((key) => {
//     if (typeof document !== 'undefined') {
//       document.removeEventListener(key, eventMap[key], false);
//     }
//   });
// }

// function alignValue(val: number, props: SliderProps) {
//   if (!props.min || !props.step) {
//     return 0;
//   }

//   const valModStep = (val - props.min) % props.step;
//   let alignedValue = val - valModStep;

//   if (Math.abs(valModStep) * 2 >= props.step) {
//     alignedValue += valModStep > 0 ? props.step : -props.step;
//   }

//   return parseFloat(alignedValue.toFixed(5));
// }

// function trimValue(val: number, props: SliderProps) {
//   if (!props.min || !props.max) {
//     return 0;
//   }

//   let trimmed = val;
//   if (trimmed <= props.min) {
//     trimmed = props.min;
//   }
//   if (trimmed >= props.max) {
//     trimmed = props.max;
//   }

//   return trimmed;
// }

// export function trimAlignValue(val: number, props: SliderProps) {
//   return alignValue(trimValue(val, props), props);
// }

// export const getSizeKey = (orientation: string) => {
//   if (orientation === 'vertical') {
//     return 'clientHeight';
//   }
//   // Defaults to 'horizontal'
//   return 'clientWidth';
// };
export {};
