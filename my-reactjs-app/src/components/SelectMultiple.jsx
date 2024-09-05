import React, { useState } from "react";
import { Select } from "antd";

export default function SelectMultiple(props) {
  const { options, onChange } = props;
  const _options = options?.map((i) => {
    return {
      value: i,
      label: i,
    };
  });

  const [selectedItems, setSelectedItems] = useState(_options);
  const filteredOptions = options.filter((o) => !selectedItems.includes(o));

  function handleChange(values) {
    setSelectedItems(values);
    onChange && onChange(values);
  }

  return (
    <Select
      mode="multiple"
      value={selectedItems}
      onChange={handleChange}
      style={{ width: "100%" }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
}
