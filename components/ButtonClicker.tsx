"use client";

import { logOnTheServer } from "./_fn";

export function ButtonClicker() {
  return (
    <button
      onClick={async () => {
        let counter = await logOnTheServer();
        console.log(counter);
      }}
    >
      click me
    </button>
  );
}
