import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

 interface BoxInterface {
  id: string;
  width: number;
  height: number;
  backgroundColor: string;
}

function BoxList() : JSX.Element {
  const [boxes, setBoxes] = useState<BoxInterface[]>([])

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: BoxInterface) : void {
    setBoxes(boxes => [...boxes, newBox] as BoxInterface[]);
  }

  /** remove box matching that id. */
  function remove(id: string) : void {
    setBoxes(boxes => boxes.filter(box => box.id !== id) as BoxInterface[] );
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor } : BoxInterface) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
