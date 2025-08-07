/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

function overlappingRectangles(rec1, rec2) {
  const rec1LineX = [rec1[0].x, rec1[1].x];
  const rec1LineY = [rec1[0].y, rec1[1].y];
  const rec2LineX = [rec2[0].x, rec2[1].x];
  const rec2LineY = [rec2[0].y, rec2[1].y];
  return rangeIntersectionLen(rec1LineX, rec2LineX) * rangeIntersectionLen(rec1LineY, rec2LineY);
}

function rangeIntersectionLen(line1, line2){
  if (line1[0]>line1[1])
    line1[0], line1[1] = line1[1], line1[0];
  if (line2[0]>line2[1])
    line2[0], line2[1] = line2[1], line2[0];
  //
  const left = Math.max(line1[0], line2[0]);
  const right = Math.min(line1[1], line2[1]);
  return Math.max(right - left, 0)

}
exports.solution = overlappingRectangles;