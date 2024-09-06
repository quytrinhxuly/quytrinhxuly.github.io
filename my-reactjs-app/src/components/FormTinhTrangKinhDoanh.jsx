import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Space,
  Table,
} from "antd";
import { DeleteFilled, PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import SelectOptions from "./SelectOptions";
import {
  nganh_hang,
  so_nam_ban_hang,
  so_nhan_vien_cua_shop,
} from "../constants/metadata";

function MonthOfTopSellingCheckBoxes(props) {
  const { onChange } = props;
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
      <Row>
        {months.map((i, index) => (
          <Col key={index} span={24}>
            <Checkbox value={i}>Tháng {i}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
}

export default function FormTinhTrangKinhDoanh(props) {
  const { name } = props;
  const defaultDataSource = [
    {
      stt: 1,
      sellType: "",
      category: "",
      monthOfTopSelling: "",
      totalSellAge: "",
      totalStaffMembers: "",
    },
  ];

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      width: "50px",
    },
    {
      title: "Khách bán Sỉ/Lẻ",
      dataIndex: "sellType",
      key: "sellType",
      width: "150px",
      render: (value, record) => {
        return (
          <Form.Item
            key={record.stt}
            name={[name, record.stt - 1, "khach_ban_si_le"]}
          >
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={true}>Sỉ</Radio>
                <Radio value={false}>Lẻ</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        );
      },
    },
    {
      title: "Ngành hàng",
      dataIndex: "category",
      key: "category",
      width: "auto",
      render: (value, record) => {
        return (
          <Form.Item
            key={record.stt}
            name={[name, record.stt - 1, "nganh_hang"]}
          >
            <SelectOptions options={nganh_hang} />
          </Form.Item>
        );
      },
    },
    {
      title: "Tháng cao điểm bán được hàng",
      dataIndex: "monthOfTopSelling",
      key: "monthOfTopSelling",
      width: "300px",
      render: (value, record) => {
        return (
          <Form.Item
            key={record.stt}
            name={[name, record.stt - 1, "thang_cao_diem_ban_duoc_hang"]}
          >
            <MonthOfTopSellingCheckBoxes />
          </Form.Item>
        );
      },
    },
    {
      title: "Số năm bán hàng",
      dataIndex: "totalSellAge",
      key: "totalSellAge",
      width: "150px",
      render: (value, record) => {
        return (
          <Form.Item
            key={record.stt}
            name={[name, record.stt - 1, "so_nam_ban_hang"]}
          >
            <SelectOptions options={so_nam_ban_hang} />
          </Form.Item>
        );
      },
    },
    {
      title: "Số nhân viên shop",
      dataIndex: "totalStaffMembers",
      key: "totalStaffMembers",
      width: "200px",
      render: (value, record) => {
        return (
          <Form.Item
            key={record.stt}
            name={[name, record.stt - 1, "so_nhan_vien_shop"]}
          >
            <SelectOptions options={so_nhan_vien_cua_shop} />
          </Form.Item>
        );
      },
    },
    {
      key: "action",
      render: (_, record) => {
        return (
          <Button
            key={record.stt}
            onClick={() => handleRemove(record)}
            type="text"
          >
            <DeleteFilled />
          </Button>
        );
      },
    },
  ];

  const [dataSource, setDataSource] = useState(defaultDataSource);

  function handleAdd() {
    const currentTotalIems = dataSource.length;
    const currentData = dataSource;
    const newData = {
      ...defaultDataSource,
      stt: currentTotalIems + 1,
    };
    currentData.push(newData);
    setDataSource([...currentData]);
  }

  function handleRemove(record) {
    if (dataSource.length <= 1) return;
    const newData = dataSource
      .filter((i) => i.stt != record.stt)
      .map((i, index) => {
        return {
          ...i,
          stt: index + 1,
        };
      });
    setDataSource([...newData]);
  }

  return (
    <div>
      <Table
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        scroll={{
          x: "60vw",
        }}
      />
      <Button onClick={handleAdd} type="text">
        <PlusCircleOutlined />
        Thêm dòng
      </Button>
    </div>
  );
}
