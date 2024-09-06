import { Card, Col, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";

export default function SelectOptions(props) {
  const {
    options,
    onChange,
    value,
    titleField = "name",
    valueField = "value",
    disabled,
    autoSelectDefaultValue,
  } = props;
  const _options = options?.map((i) => {
    return {
      value: i[valueField],
      label: i[titleField],
    };
  });

  useEffect(() => {
    if (autoSelectDefaultValue && _options.length > 0) {
      const _defaultValue = _options[0]["value"];
      onChange && onChange(_defaultValue);
    }
  }, [autoSelectDefaultValue]);
  function handleChange(e) {
    onChange && onChange(e.value);
  }

  return (
    <Select
      disabled={disabled}
      value={value}
      onChange={handleChange}
      labelInValue
      defaultValue={
        autoSelectDefaultValue && _options.length > 0 ? _options[0] : null
      }
      options={_options}
      placeholder="Chọn giá trị"
    />
  );
}
