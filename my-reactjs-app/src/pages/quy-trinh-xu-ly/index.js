import { Card, Col, Form, Input, Row, Button, DatePicker } from "antd";
import SelectOptions from "../../components/SelectOptions";
import FormTitle from "../../components/FormTitle";
import FormXacMinhKhachHang from "../../components/FormXacMinhKhachHang";
import FormTinhTrangKinhDoanh from "../../components/FormTinhTrangKinhDoanh";
import FormThongTinKenhBanHang from "../../components/FormThongTinKenhBanHang";
import UploadButton from "../../components/UploadButton";

import {
  nhom_quy_trinh,
  quy_trinh,
  de_xuat_gia_ban_voi_loai_dich_vu,
  tinh_trang_khach_hang,
  mo_ta_ly_do_de_xuat,
  doi_thu,
  ty_trong_don_noi_vung_lien_vung,
  loai_gia_dang_di_theo_tuyen,
  loai_gia_dang_di_theo_khoi_luong,
  chinh_sach_phu_phi,
} from "../../constants/metadata";

function QuyTrinhXuLyPage() {
  function handleSubmitForm(values) {
    console.log("values ", values);
  }

  return (
    <Card title="TẠO PHIẾU MỚI" className="main-form-card">
      <Row>
        <Col span={24}>
          <Form
            onFinish={handleSubmitForm}
            className="my-form"
            layout="vertical"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Row gutter={[15]}>
              <Col sm={12} span={24}>
                <Form.Item label="Nhóm quy trình" name="nhom_quy_trinh">
                  <SelectOptions
                    options={nhom_quy_trinh}
                    titleField="name"
                    valueField="command"
                    autoSelectDefaultValue
                  />
                </Form.Item>
              </Col>
              <Col sm={12} span={24}>
                <Form.Item label="Quy trình" name="quy_trinh">
                  <SelectOptions
                    options={quy_trinh}
                    titleField="name"
                    valueField="_id"
                    disabled
                    autoSelectDefaultValue
                  />
                </Form.Item>
              </Col>
            </Row>

            <Card
              title={<FormTitle>Thông tin người đề xuất</FormTitle>}
              className="form-card"
            >
              <Row gutter={[15]}>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Mã nhân viên (AM/BDM)"
                    name="ma_nhan_vien"
                    required
                  >
                    <Input type="text" placeholder="Nhập giá trị số" />
                  </Form.Item>
                </Col>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Đề xuất giá bán với loại dịch vụ"
                    name="de_xuat_gia_ban_voi_loai_dich_vu"
                    required
                  >
                    <SelectOptions options={de_xuat_gia_ban_voi_loai_dich_vu} />
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <Card
              title={<FormTitle>Thông tin khách hàng</FormTitle>}
              className="form-card"
            >
              <Row gutter={[15]}>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Tình trạng khách hàng"
                    name="tinh_trang_khach_hang"
                    required
                  >
                    <SelectOptions options={tinh_trang_khach_hang} />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Mã khách hàng"
                    name="ma_khach_hang"
                    required
                  >
                    <Input placeholder="Nhập giá trị" />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Link phiếu cài giá"
                    name="link_phieu_cai_gia"
                    required
                  >
                    <Input placeholder="Nhập giá trị" />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Mô tả lý do đề xuất"
                    name="mo_ta_ly_do_de_xuat"
                    required
                  >
                    <SelectOptions options={mo_ta_ly_do_de_xuat} />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card
              title={<FormTitle>Xác minh khách hàng</FormTitle>}
              className="form-card"
            >
              <FormXacMinhKhachHang name="xac_minh_khach_hang" />
            </Card>

            <Card
              title={<FormTitle>Thông tin đối thủ</FormTitle>}
              className="form-card"
            >
              <Row gutter={[15]}>
                <Col sm={12} span={24}>
                  <Form.Item label="Đối thủ" name="doi_thu" required>
                    <SelectOptions options={doi_thu} />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Loại giá đang đi theo Tuyến"
                    name="loai_gia_dang_di_theo_tuyen"
                    required
                  >
                    <SelectOptions options={loai_gia_dang_di_theo_tuyen} />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Loại giá đang đi theo Khối lượng"
                    name="loai_gia_dang_di_theo_khoi_luong"
                    required
                  >
                    <SelectOptions options={loai_gia_dang_di_theo_khoi_luong} />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Màn hình sản lượng/ doanh thu đơn bên đối thủ"
                    name="man_hinh_san_luong_doanh_thu_don_ben_doi_thu"
                    required
                  >
                    <UploadButton />
                  </Form.Item>
                </Col>
              </Row>
            </Card>

            <Card
              title={<FormTitle>Tình trạng kinh doanh</FormTitle>}
              className="form-card"
            >
              <FormTinhTrangKinhDoanh name="tinh_trang_kinh_doanh" />
            </Card>

            <Card
              title={<FormTitle>Thông tin TẤT CẢ các kênh bán hàng</FormTitle>}
              className="form-card"
            >
              <FormThongTinKenhBanHang name="thong_tin_tat_ca_cac_kenh_ban_hang" />
            </Card>

            <Card
              title={<FormTitle>Thông tin đề xuất</FormTitle>}
              className="form-card"
            >
              <Row gutter={[15]}>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Tỷ trọng đơn Nội Vùng Liên Vùng"
                    name="ty_trong_don_noi_vung_lien_vung"
                  >
                    <SelectOptions options={ty_trong_don_noi_vung_lien_vung} />
                  </Form.Item>
                </Col>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Chính sách phụ phí"
                    name="chinh_sach_phu_phi"
                  >
                    <SelectOptions options={chinh_sach_phu_phi} />
                  </Form.Item>
                </Col>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Ngày bắt đầu tính SL cam kết"
                    name="ngay_bat_dau_tinh_sl_cam_ket"
                  >
                    <DatePicker />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Row
              gutter={[10, 10]}
              style={{ marginTop: "10px", float: "right" }}
            >
              <Col>
                <Button>Hủy</Button>
              </Col>
              <Col>
                <Button htmlType="submit" type="primary">
                  Hoàn tất
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default QuyTrinhXuLyPage;
