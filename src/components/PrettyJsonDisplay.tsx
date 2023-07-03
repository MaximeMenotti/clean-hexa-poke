import * as React from "react";

export interface IPrettyJsonDisplayProps {
  data: any;
}

function PrettyJsonDisplay(props: IPrettyJsonDisplayProps) {
  const { data } = props;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default PrettyJsonDisplay;
