import { Button, Form, Input, Radio, Space, Table } from "antd";
import { DeleteFilled, PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import UploadButton from "./UploadButton";
export default function FormXacMinhKhachHang(props) {
  const { name } = props;
  const defaultDataSource = [
    {
      stt: 1,
      storeAddress: "",
      imgStoreAddress: "",
      imgProduct: "",
      isStorePickup: "",
      pickupAddress: "",
      imgPickupAddress: "",
    },
  ];

  const columns = [
    {
      title: "STT",
      with: "50px",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Địa chỉ cửa hàng",
      dataIndex: "storeAddress",
      key: "storeAddress",
      render: (value, record) => {
        return (
          <Form.Item key={record.stt} name={[name, record.stt - 1, "dia_chi_cua_hang"]}>
            <Input placeholder="Nhập giá trị" value={value} />
          </Form.Item>
        );
      },
    },
    {
      title: "Ảnh check-in tại cửa hàng (Location & thời gian chụp)",
      dataIndex: "imgStoreAddress",
      key: "imgStoreAddress",
      render: (value, record) => {
        return (
          <Form.Item key={record.stt} name={[name, record.stt - 1, "anh_checkin_tai_cua_hang"]}>
            <UploadButton />
          </Form.Item>
        );
      },
    },
    {
      title: "Ảnh sản phẩm kinh doanh",
      dataIndex: "imgProduct",
      key: "imgProduct",
      render: (value, record) => {
        return (
          <Form.Item key={record.stt} name={[name, record.stt - 1, "anh_san_pham_kinh_doanh"]}>
            <UploadButton />
          </Form.Item>
        );
      },
    },
    {
      title: "Địa chỉ cừa hàng là nơi lấy hàng?",
      dataIndex: "isStorePickup",
      key: "isStorePickup",
      render: (value, record) => {
        return (
          <Form.Item key={record.stt} name={[name, record.stt - 1, "dia_chi_cua_hang_la_noi_lay_hang"]}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={true}>Đúng</Radio>
                <Radio value={false}>Không</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        );
      },
    },
    {
      title: "Địa chỉ lấy hàng",
      dataIndex: "pickupAddress",
      key: "pickupAddress",
      render: (value, record) => {
        return (
          <Form.Item key={record.stt} name={[name, record.stt - 1, "dia_chi_lay_hang"]}>
            <Input placeholder="Nhập giá trị" value={value} />
          </Form.Item>
        );
      },
    },
    {
      title: "Ảnh check-in tại nơi lấy hàng (Location & thời gian chụp)",
      dataIndex: "imgPickupAddress",
      key: "imgPickupAddress",
      render: (value, record) => {
        return (
          <Form.Item key={record.stt} name={[name, record.stt - 1, "anh_checkin_tai_noi_lay_hang"]}>
            <UploadButton />
          </Form.Item>
        );
      },
    },
    {
      key: "action",
      render: (value, record) => {
        return (
          <Button key={record.stt} onClick={() => handleRemove(record)} type="text">
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
