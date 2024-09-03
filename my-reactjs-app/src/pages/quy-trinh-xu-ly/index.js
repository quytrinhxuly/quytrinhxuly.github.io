import { Card, Col, Form, Input, Row, Select } from "antd";

function QuyTrinhXuLyPage() {
  return (
    <Card title="Tạo phiếu mới">
      <Form>
        <Row>
          <Col span={12}>
            <Form.Item label="Nhóm quy trình">
              <Select
                labelInValue
                defaultValue={{
                  value: "Quy Trình Bán Hàng",
                  label: "Quy Trình Bán Hàng"
                }}
                style={{ width: "auto" }}
                options={[
                  {
                    value: "Quy Trình Bán Hàng",
                    label: "Quy Trình Bán Hàng"
                  }
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Quy trình">
              <Select
                labelInValue
                defaultValue={{
                  value: "QUY TRÌNH ĐỀ XUẤT GIÁ ƯU ĐÃI ĐẶC BIỆT",
                  label: "QUY TRÌNH ĐỀ XUẤT GIÁ ƯU ĐÃI ĐẶC BIỆT"
                }}
                style={{ width: "auto" }}
                options={[
                  {
                    value: "QUY TRÌNH ĐỀ XUẤT GIÁ ƯU ĐÃI ĐẶC BIỆT",
                    label: "QUY TRÌNH ĐỀ XUẤT GIÁ ƯU ĐÃI ĐẶC BIỆT"
                  }
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <h2>Thông tin người đề xuất</h2>
        <Row>
          <Col span={12}>
            <Form.Item label="Mã nhân viên (AM/BDM)">
              <Input type="number" placeholder="Nhập giá trị số" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Đề xuất giá bán với loại dịch vụ">
              <Select
                placeholder="Chọn giá trị"
                labelInValue
                style={{ width: "200px" }}
                options={[
                  {
                    value: "Hàng nhẹ",
                    label: "Hàng nhẹ"
                  },
                  {
                    value: "Hàng nặng",
                    label: "Hàng nặng"
                  }
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <h2>Thông tin khách hàng</h2>
      </Form>
    </Card>
  );
}

export default QuyTrinhXuLyPage;
