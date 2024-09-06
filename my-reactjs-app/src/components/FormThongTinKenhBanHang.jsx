import { Button, Form, Input, Table } from "antd";
import { DeleteFilled, PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import SelectOptions from "./SelectOptions";
import {
  co_chay_quang_cao_khong,
  co_livestream_ban_hang_khong,
  kenh_ban_hang_online,
  luot_theo_doi_hoac_thich_kenh,
} from "../constants/metadata";
export default function FormThongTinKenhBanHang(props) {
  const { name } = props;
  const defaultDataSource = [
    {
      stt: 1,
      sellChannel: "",
      sellChannelUrl: "",
      totalFollower: "",
      isRunAds: "",
      isLiveStream: "",
    },
  ];

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      width: "50px"
    },
    {
      title: "Kênh bán hàng",
      dataIndex: "sellChannel",
      key: "sellChannel",
      width: '200px',
      render: (value, record) => {
        return (
          <Form.Item name={[name, record.stt - 1, "kenh_ban_hang_online"]}>
            <SelectOptions options={kenh_ban_hang_online} />
          </Form.Item>
        );
      },
    },
    {
      title: "Link kênh bán hàng",
      dataIndex: "sellChannelUrl",
      key: "sellChannelUrl",
      render: (value, record) => {
        return (
          <Form.Item name={[name, record.stt - 1, "link_kenh_ban_hang"]}>
            <Input placeholder="Nhập giá trị" />
          </Form.Item>
        );
      },
    },
    {
      title: "Lượt theo dõi hoặc thích kênh",
      dataIndex: "totalFollower",
      key: "totalFollower",
      width: '230px',
      render: (value, record) => {
        return (
          <Form.Item
            name={[name, record.stt - 1, "luot_theo_doi_hoac_thich_kenh"]}
          >
            <SelectOptions options={luot_theo_doi_hoac_thich_kenh} />
          </Form.Item>
        );
      },
    },
    {
      title: "Có chạy quảng cáo không?",
      dataIndex: "isRunAds",
      key: "isRunAds",
      width: '80px',
      render: (value, record) => {
        return (
          <Form.Item name={[name, record.stt - 1, "co_chay_quang_cao_khong"]}>
            <SelectOptions options={co_chay_quang_cao_khong} />
          </Form.Item>
        );
      },
    },
    {
      title: "Có livestream bán hàng không",
      dataIndex: "isLiveStream",
      key: "isLiveStream",
      width: '80px',
      render: (value, record) => {
        return (
          <Form.Item
            name={[name, record.stt - 1, "co_livestream_ban_hang_khong"]}
          >
            <SelectOptions options={co_livestream_ban_hang_khong} />
          </Form.Item>
        );
      },
    },
    {
      key: "action",
      render: (record) => {
        return (
          <Button onClick={() => handleRemove(record)} type="text">
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
