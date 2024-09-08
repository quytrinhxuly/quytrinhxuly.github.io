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
  san_luong_cam_ket,
  phan_khuc_khoi_luong,
  doanh_thu_hang_nang_cam_ket,
  de_xuat_gia_ban_tinh_tren_1_kg_bang_gia_toi_thieu_20kg,
} from "../../constants/metadata";
import ticketServices from "../../services/ticketServices";
import { useAppCtx } from "../../providers/app.provider";
import { useEffect, useState } from "react";

function QuyTrinhXuLyPage() {
  const { Toast } = useAppCtx();
  const [isLoading, setIsLoading] = useState(false);
  const [tinh_trang_khach_hang_selected, setTinh_trang_khach_hang_selected] =
    useState("");
  const [gia_ban_loai_dich_vu, setGia_ban_loai_dich_vu] = useState("");
  const [form] = Form.useForm();
  const default_tinh_trang_khach_hang = "Chưa sử dụng";

  useEffect(() => {
    console.log("gia_ban_loai_dich_vu ", gia_ban_loai_dich_vu);
  }, [gia_ban_loai_dich_vu]);

  function handleSubmitForm(values) {
    setIsLoading(true);
    ticketServices.submitAsync(values, (response) => {
      const { success } = response;
      if (success) {
        Toast.success({ message: "Gửi ticket thành công" });
        form.resetFields();
      } else {
        Toast.error({ message: "Gửi yêu cầu thất bại!" });
      }

      setIsLoading(false);
    });
  }

  function formChange(e) {
    console.log("... ", form.getFieldsValue());
  }

  return (
    <Card title="TẠO PHIẾU MỚI" className="main-form-card">
      <Row>
        <Col span={24}>
          <Form
            form={form}
            onChange={formChange}
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
                    valueField="name"
                    autoSelectDefaultValue
                  />
                </Form.Item>
              </Col>
              <Col sm={12} span={24}>
                <Form.Item label="Quy trình" name="quy_trinh">
                  <SelectOptions
                    options={quy_trinh}
                    titleField="name"
                    valueField="name"
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
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập giá trị!",
                      },
                    ]}
                  >
                    <Input type="text" placeholder="Nhập giá trị số" />
                  </Form.Item>
                </Col>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Đề xuất giá bán với loại dịch vụ"
                    name="de_xuat_gia_ban_voi_loai_dich_vu"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị!",
                      },
                    ]}
                  >
                    <SelectOptions
                      options={de_xuat_gia_ban_voi_loai_dich_vu}
                      onChange={setGia_ban_loai_dich_vu}
                    />
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
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị!",
                      },
                    ]}
                  >
                    <SelectOptions
                      options={tinh_trang_khach_hang}
                      onChange={setTinh_trang_khach_hang_selected}
                    />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Mã khách hàng"
                    name="ma_khach_hang"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập giá trị!",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập giá trị" />
                  </Form.Item>
                </Col>

                {tinh_trang_khach_hang_selected !=
                  default_tinh_trang_khach_hang && (
                  <Col sm={12} span={24}>
                    <Form.Item
                      label="Sản lượng thực tế trung bình 3 tháng gần nhất"
                      name="san_luong_thuc_te_trung_binh_3_thang_gan_nhat"
                      required
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập giá trị!",
                        },
                      ]}
                    >
                      <Input placeholder="Nhập giá trị" />
                    </Form.Item>
                  </Col>
                )}

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Link phiếu cài giá"
                    name="link_phieu_cai_gia"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập giá trị!",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập giá trị" />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Mô tả lý do đề xuất"
                    name="mo_ta_ly_do_de_xuat"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị!",
                      },
                    ]}
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
                  <Form.Item
                    label="Đối thủ"
                    name="doi_thu"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị!",
                      },
                    ]}
                  >
                    <SelectOptions options={doi_thu} />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Loại giá đang đi theo Tuyến"
                    name="loai_gia_dang_di_theo_tuyen"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị!",
                      },
                    ]}
                  >
                    <SelectOptions options={loai_gia_dang_di_theo_tuyen} />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Loại giá đang đi theo Khối lượng"
                    name="loai_gia_dang_di_theo_khoi_luong"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị!",
                      },
                    ]}
                  >
                    <SelectOptions options={loai_gia_dang_di_theo_khoi_luong} />
                  </Form.Item>
                </Col>

                <Col sm={12} span={24}>
                  <Form.Item
                    label="Màn hình sản lượng/ doanh thu đơn bên đối thủ"
                    name="man_hinh_san_luong_doanh_thu_don_ben_doi_thu"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng tải ảnh lên!",
                      },
                    ]}
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
                {gia_ban_loai_dich_vu == "Hàng Nhẹ" && (
                  <>
                    <Col sm={12} span={24}>
                      <Form.Item
                        label="Sản lượng cam kết (Đơn/Tháng)"
                        name="san_luong_cam_ket"
                        required
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn giá trị",
                          },
                        ]}
                      >
                        <SelectOptions options={san_luong_cam_ket} />
                      </Form.Item>
                    </Col>
                    <Col sm={12} span={24}>
                      <Form.Item
                        label="Phân khúc khối lượng"
                        name="phan_khuc_khoi_luong"
                        required
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn giá trị",
                          },
                        ]}
                      >
                        <SelectOptions options={phan_khuc_khoi_luong} />
                      </Form.Item>
                    </Col>
                  </>
                )}
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Tỷ trọng đơn Nội Vùng Liên Vùng"
                    name="ty_trong_don_noi_vung_lien_vung"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị",
                      },
                    ]}
                  >
                    <SelectOptions options={ty_trong_don_noi_vung_lien_vung} />
                  </Form.Item>
                </Col>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Chính sách phụ phí"
                    name="chinh_sach_phu_phi"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị",
                      },
                    ]}
                  >
                    <SelectOptions options={chinh_sach_phu_phi} />
                  </Form.Item>
                </Col>
                <Col sm={12} span={24}>
                  <Form.Item
                    label="Ngày bắt đầu tính SL cam kết"
                    name="ngay_bat_dau_tinh_sl_cam_ket"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn giá trị",
                      },
                    ]}
                  >
                    <DatePicker format={"DD/MM/YYYY"} />
                  </Form.Item>
                </Col>

                {gia_ban_loai_dich_vu == "Hàng Nặng" && (
                  <>
                    <Col sm={12} span={24}>
                      <Form.Item
                        label="Doanh thu hàng Nặng cam kết"
                        name="doanh_thu_hang_nang_cam_ket"
                        required
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn giá trị",
                          },
                        ]}
                      >
                        <SelectOptions options={doanh_thu_hang_nang_cam_ket} />
                      </Form.Item>
                    </Col>
                    <Col sm={12} span={24}>
                      <Form.Item
                        label="Đề xuất giá bán tính trên 1 KG (Bảng giá tối thiểu 20KG)"
                        name="de_xuat_gia_ban_tinh_tren_1_kg_bang_gia_toi_thieu_20kg"
                        required
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn giá trị",
                          },
                        ]}
                      >
                        <SelectOptions
                          options={
                            de_xuat_gia_ban_tinh_tren_1_kg_bang_gia_toi_thieu_20kg
                          }
                        />
                      </Form.Item>
                    </Col>
                  </>
                )}
              </Row>
            </Card>
            <Row
              gutter={[10, 10]}
              style={{ marginTop: "10px", float: "right" }}
            >
              <Col>
                <Button onClick={() => setIsLoading(false)}>Hủy</Button>
              </Col>
              <Col>
                <Button htmlType="submit" type="primary" loading={isLoading}>
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
