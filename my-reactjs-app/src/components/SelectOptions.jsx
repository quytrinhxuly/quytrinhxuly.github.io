import { Card, Col, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";

export default function SelectOptions(props) {
  const {
    options,
    onChange,
    value,
    titleField = "name",
    valueField = "value",
    disabledField = "status",
    disabled,
    autoSelectDefaultValue,
  } = props;
  const _options = options?.map((i) => {
    return {
      value: i[valueField],
      label: i[titleField],
      disabled: i[disabledField] == "inactive" ? true : false,
    };
  });

  useEffect(() => {
    if (
      autoSelectDefaultValue &&
      _options.filter((i) => i["disabled"] == false).length > 0
    ) {
      const _defaultValue = _options.filter((i) => i["disabled"] == false)[0][
        "value"
      ];
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
