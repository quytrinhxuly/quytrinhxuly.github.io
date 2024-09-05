import { Card, Col, Form, Input, Row, Select } from "antd";

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
  return (
    <Select
      disabled={disabled}
      value={value}
      onChange={onChange}
      labelInValue
      defaultValue={
        autoSelectDefaultValue && _options.length > 0 ? _options[0] : null
      }
      options={_options}
      placeholder="Chọn giá trị"
    />
  );
}
