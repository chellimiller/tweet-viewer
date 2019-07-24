import React from "react";

export const TableComponent: React.FC<{ componentId: string }> = (props: { componentId: string }) => (
    <p>One day, a table with the id of '{props.componentId}' will be here!</p>
);