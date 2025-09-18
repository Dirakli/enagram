import React from "react";

export interface DiffSegment {
  type: "equal" | "delete" | "insert";
  text: string;
  start: number;
  length: number;
}

export interface ComparisonResult {
  segmentsFirst: DiffSegment[];
  segmentsSecond: DiffSegment[];
  deletions: number;
  insertions: number;
  processingTime: number;
}

export function compareTexts(textA: string, textB: string): ComparisonResult {
  const startTime = performance.now();

  const segmentsFirst: DiffSegment[] = [];
  const segmentsSecond: DiffSegment[] = [];

  let deletions = 0;
  let insertions = 0;

  let i = 0;
  let j = 0;

  while (i < textA.length || j < textB.length) {
    if (i >= textA.length) {
      segmentsSecond.push({
        type: "insert",
        text: textB[j],
        start: j,
        length: 1,
      });
      insertions++;
      j++;
    } else if (j >= textB.length) {
      segmentsFirst.push({
        type: "delete",
        text: textA[i],
        start: i,
        length: 1,
      });
      deletions++;
      i++;
    } else if (textA[i] === textB[j]) {
      segmentsFirst.push({
        type: "equal",
        text: textA[i],
        start: i,
        length: 1,
      });
      segmentsSecond.push({
        type: "equal",
        text: textB[j],
        start: j,
        length: 1,
      });
      i++;
      j++;
    } else {
      let foundMatch = false;

      for (let k = j + 1; k < textB.length; k++) {
        if (textA[i] === textB[k]) {
          segmentsSecond.push({
            type: "insert",
            text: textB[j],
            start: j,
            length: 1,
          });
          insertions++;
          j++;
          foundMatch = true;
          break;
        }
      }

      if (!foundMatch) {
        segmentsFirst.push({
          type: "delete",
          text: textA[i],
          start: i,
          length: 1,
        });
        deletions++;
        i++;
      }
    }
  }

  const endTime = performance.now();
  const processingTime = endTime - startTime;

  return {
    segmentsFirst,
    segmentsSecond,
    deletions,
    insertions,
    processingTime,
  };
}

export function renderHighlightedText(
  segments: DiffSegment[]
): React.ReactElement[] {
  return segments.map((segment, index) => {
    const className =
      segment.type === "delete"
        ? "bg-red-200 text-red-800"
        : segment.type === "insert"
        ? "bg-green-200 text-green-800"
        : "";

    return React.createElement("span", { key: index, className }, segment.text);
  });
}
