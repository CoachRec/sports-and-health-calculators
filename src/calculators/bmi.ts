/**
 * Calculate BMI using metric units.
 * @param weight - Weight in kilograms.
 * @param height - Height in meters.
 * @returns - BMI value.
 */
export function calculateBMIMetric(weight: number, height: number): number {
  if (weight <= 0 || height <= 0) {
    throw new Error("Weight and height must be greater than 0");
  }
  return weight / (height * height);
}

/**
 * Calculate BMI using imperial units.
 * @param weight - Weight in pounds.
 * @param height - Height in inches.
 * @returns - BMI value.
 */
export function calculateBMIImperial(weight: number, height: number): number {
  if (weight <= 0 || height <= 0) {
    throw new Error("Weight and height must be greater than 0");
  }
  return (weight / (height * height)) * 703;
}
