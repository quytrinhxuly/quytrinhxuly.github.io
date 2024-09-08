import { quy_trinh_xy_ly_metadata } from "./quy_trinh_xy_ly_metadata";

export const nhom_quy_trinh = [
  {
    _id: "651fae9941825a4f58a83d7b",
    name: "Quy Trình Bán Hàng",
    command: "quy_trinh_ban_hang",
    status: "active",
    created_ip: "103.191.145.200",
    created_employee: 242614,
    created_date: "2023-10-06T06:52:09.497Z",
  },

  {
    _id: "651f852fee8460a1ac455858",
    name: "Phòng Trải Nghiệm Khách Hàng (CX)",
    command: "phong_trai_nghiem_khach_hang",
    status: "inactive",
    updated_ip: "103.191.145.200",
    updated_employee: 242614,
    updated_date: "2023-10-06T03:55:41.763Z",
    created_ip: "103.191.145.200",
    created_employee: 242614,
    created_date: "2023-10-06T03:55:27.649Z",
  },
    {
      _id: "651f852041825a4f58a83d76",
      name: "Phòng Đảm Bảo Chất Lượng (QA)",
      command: "phong_dam_bao_chat_luong_qa",
      status: "inactive",
      created_ip: "103.191.145.200",
      created_employee: 242614,
      created_date: "2023-10-06T03:55:12.132Z",
    },
    {
      _id: "651f8510ee8460a1ac455857",
      name: "Phòng Quản Lý Chất Lượng (QC)",
      command: "phong_quan_ly_chat_luong_qc",
      status: "inactive",
      created_ip: "103.191.145.200",
      created_employee: 242614,
      created_date: "2023-10-06T03:54:56.944Z",
    },
    {
      _id: "651f84fe41825a4f58a83d75",
      name: "Phòng Chăm Sóc Khách Hàng (CS)",
      command: "phong_cham_soc_khach_hang",
      status: "inactive",
      updated_ip: "103.191.145.200",
      updated_employee: 242614,
      updated_date: "2023-10-06T03:55:51.533Z",
      created_ip: "103.191.145.200",
      created_employee: 242614,
      created_date: "2023-10-06T03:54:38.121Z",
    },
    {
      _id: "64e233c92d7de86dff2eb5af",
      name: "Quy Trình Công Nghệ",
      command: "quy_trinh_cong_nghe",
      status: "inactive",
      created_ip: "103.191.145.200",
      created_employee: 242614,
      created_date: "2023-08-20T15:39:53.939Z",
    },
    {
      _id: "64e2328c93da47af83cf0a90",
      name: "Quy Trình Vận Hành",
      command: "quy_trinh_van_hanh",
      status: "inactive",
      created_ip: "103.191.145.200",
      created_employee: 242614,
      created_date: "2023-08-20T15:34:36.172Z",
    },
    {
      _id: "647711dbcfa6cb425f054513",
      name: "Quy Trình Tài Chính",
      command: "quy_trinh_tai_chinh",
      status: "inactive",
      created_ip: "35.247.155.234",
      created_employee: 242614,
      created_date: "2023-05-31T09:22:35.212Z",
    },
    {
      _id: "62d1224733034822b61b67df",
      name: "HR System",
      command: "hr_system",
      description: "Nhóm quy trình dùng cho hệ thống hrm",
      status: "inactive",
      created_ip: "35.247.155.234",
      created_employee: 209749,
      created_date: "2022-07-15T08:16:07.751Z",
    },
];

export const quy_trinh = [
    {
      _id: "66c71b37a6d5c91cc0c6c356",
      name: "ĐỀ XUẤT LOẠI TRỪ ĐIỀU CHỈNH GIÁ KHÁCH HÀNG",
      status: "inactive",
      approve_type: "max_level",
      flow_group_id: "651fae9941825a4f58a83d7b",
      whitelist_title_ids: [7225, 100126, 7227, 5707, 5675, 5659, 14627],
      owner_employee_ids: [3053001],
      follow_employee_ids: [3053001, 251912, 2035864],
      updated_ip: "101.99.32.236",
      updated_employee: 3053001,
      updated_date: "2024-08-26T03:20:15.827Z",
      created_ip: "101.99.32.236",
      created_employee: 3053001,
      created_source: "fe",
      created_date: "2024-08-22T11:04:23.606Z",
    },
    {
      _id: "66c305fd1576cf4935bbba25",
      name: "QUY TRÌNH XÁC MINH KHÁCH HÀNG CHUỖI",
      status: "inactive",
      approve_type: "max_level",
      flow_group_id: "651fae9941825a4f58a83d7b",
      whitelist_title_ids: [100126, 7225, 7227, 7229, 5707, 5675, 14627, 5659],
      owner_employee_ids: [3053001],
      follow_employee_ids: [2035864, 3014556, 251912, 3053001],
      updated_ip: "101.99.32.236",
      updated_employee: 3053001,
      updated_date: "2024-08-30T11:40:42.714Z",
      created_ip: "101.99.32.236",
      created_employee: 3053001,
      created_source: "fe",
      created_date: "2024-08-19T08:44:45.825Z",
    },

  {
    _id: "66b9ba6a97c3a7006a1cfe13",
    name: "QUY TRÌNH ĐỀ XUẤT GIÁ ƯU ĐÃI ĐẶC BIỆT",
    description:
      '\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\u003cdiv style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: stretch; width: 100%; max-width: 1500px; margin: auto; gap: 20px;"\u003e\u003c!-- Image 1 --\u003e\n\u003cdiv style="flex: 1; display: flex; justify-content: center; align-items: center; border: 2px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); padding: 10px; background-color: #f9f9f9; overflow: hidden; height: 100%; max-height: 500px; width: 100%;"\u003e\u003cimg style="width: 100%; height: auto; max-height: 100%; object-fit: contain; display: block;" src="https://online-gateway.ghn.vn/file/public-api/files/get?file_id=66bacf775f03db3a86f1cafd" alt="Image 1" /\u003e\u003c/div\u003e\n\u003c!-- Image 2 --\u003e\n\u003cdiv style="flex: 1; display: flex; justify-content: center; align-items: center; border: 2px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); padding: 10px; background-color: #f9f9f9; overflow: hidden; height: 100%; max-height: 500px; width: 100%;"\u003e\u003cimg style="width: 100%; height: auto; max-height: 100%; object-fit: contain; display: block;" src="https://online-gateway.ghn.vn/file/public-api/files/get?file_id=66bad28a0a17cc497d3f5eca" alt="Image 2" /\u003e\u003c/div\u003e\n\u003c/div\u003e\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e',
    status: "active",
    approve_type: "max_level",
    flow_group_id: "651fae9941825a4f58a83d7b",
    whitelist_title_ids: [14627, 7225, 5659, 5707, 5675, 100126, 100111],
    owner_employee_ids: [3053001],
    follow_employee_ids: [3053001, 2035864],
    updated_ip: "101.99.32.236",
    updated_employee: 3053001,
    updated_date: "2024-08-30T10:01:48.868Z",
    created_ip: "101.99.32.236",
    created_employee: 3053001,
    created_source: "fe",
    created_date: "2024-08-12T07:31:54.008Z",
  },

    {
      _id: "669f524d35d0804565d8204a",
      name: "Yêu cầu thay đổi Nhân viên phụ trách Khách hàng (Team Telesales)",
      description:
        "\u003cp\u003eEform d\u0026ugrave;ng để chuyển lead c\u0026ugrave;ng Team Telesales\u003c/p\u003e",
      status: "inactive",
      approve_type: "all_level",
      flow_group_id: "651fae9941825a4f58a83d7b",
      owner_employee_ids: [2035864],
      updated_ip: "14.242.193.56",
      updated_employee: 2035864,
      updated_date: "2024-07-23T07:01:32.596Z",
      created_ip: "14.242.193.56",
      created_employee: 2035864,
      created_source: "fe",
      created_date: "2024-07-23T06:48:45Z",
    },
    {
      _id: "655320faee9818f969c8c26b",
      name: "Yêu cầu xác thực (EKYC) Khách hàng Doanh nghiệp ",
      description:
        "\u003cp\u003eEform d\u0026ugrave;ng để y\u0026ecirc;u cầu add Whitelist để x\u0026aacute;c thực (EKYC) Kh\u0026aacute;ch h\u0026agrave;ng Doanh nghiệp:\u003c/p\u003e\n\u003cp\u003eKhi phiếu được duyệt xong, App Kh\u0026aacute;ch h\u0026agrave;ng vẫn hiện l\u0026agrave; chưa x\u0026aacute;c thực (hiện tại t\u0026iacute;nh năng x\u0026aacute;c thực T\u0026agrave;i khoản doanh nghiệp đang ho\u0026agrave;n thiện), tuy nhi\u0026ecirc;n Nh\u0026acirc;n vi\u0026ecirc;n c\u0026oacute; thể c\u0026agrave;i gi\u0026aacute; v\u0026agrave; Kh\u0026aacute;ch h\u0026agrave;ng l\u0026ecirc;n đơn b\u0026igrave;nh thường.\u003c/p\u003e",
      status: "inactive",
      approve_type: "all_level",
      flow_group_id: "651fae9941825a4f58a83d7b",
      owner_employee_ids: [2035864],
      updated_ip: "103.191.145.200",
      updated_employee: 3006735,
      updated_date: "2023-12-27T10:17:42.819Z",
      created_ip: "42.116.19.213",
      created_employee: 2035864,
      created_source: "fe",
      created_date: "2023-11-14T07:25:46.142Z",
    },
    {
      _id: "6532355eabc9f3fa1e0f3b81",
      name: "Yêu cầu thay đổi Nhân viên phụ trách Khách hàng (Business Development Department)",
      description:
        "\u003cp\u003eEform d\u0026ugrave;ng để chuyển lead c\u0026ugrave;ng khối thương mại\u003c/p\u003e",
      status: "inactive",
      approve_type: "all_level",
      flow_group_id: "651fae9941825a4f58a83d7b",
      owner_employee_ids: [2035864],
      updated_ip: "113.187.162.43",
      updated_employee: 2035864,
      updated_date: "2024-09-04T04:24:17.937Z",
      created_ip: "42.116.19.213",
      created_employee: 2035864,
      created_source: "fe",
      created_date: "2023-10-20T08:07:58.648Z",
    },
    {
      _id: "652cbeb7106b9cd9a5737e4a",
      name: "Quy trình nạp xu cho Khách hàng",
      description:
        '\u003cp\u003eTừ ng\u0026agrave;y 1/7/2023, theo th\u0026ocirc;ng b\u0026aacute;o thay đổi c\u0026aacute;ch thức nạp v\u0026iacute; xu sao k\u0026ecirc; - bảo l\u0026atilde;nh, user chỉ sử dụng Eform bảo l\u0026atilde;nh trong c\u0026aacute;c trường hợp dưới đ\u0026acirc;y:\u003c/p\u003e\n\u003col\u003e\n\u003cli\u003e\u0026nbsp;1. Kh\u0026aacute;ch h\u0026agrave;ng đ\u0026atilde; chuyển tiền nhưng qu\u0026aacute; 24h vẫn chưa nhận được xu trong v\u0026iacute;\u003c/li\u003e\n\u003cli\u003e\u0026nbsp;2. C\u0026aacute;c khoản nạp của kh\u0026aacute;ch h\u0026agrave;ng v\u0026agrave;o thứ 7 v\u0026agrave; Chủ nhật.\u003c/li\u003e\n\u003c/ol\u003e\n\u003cp\u003eRevenue Management Team sẽ từ chối xử l\u0026yacute; c\u0026aacute;c khoản bảo l\u0026atilde;nh nếu kh\u0026ocirc;ng nằm trong 2 trường hợp tr\u0026ecirc;n.\u003c/p\u003e\n\u003cp\u003eQuy tr\u0026igrave;nh xử l\u0026yacute;:\u0026nbsp;\u003c/p\u003e\n\u003col style="list-style-type: lower-alpha;"\u003e\n\u003cli\u003eBước 1: Kh\u0026aacute;ch h\u0026agrave;ng nạp tiền v\u0026agrave;o t\u0026agrave;i khoản ng\u0026acirc;n h\u0026agrave;ng Standard Chart Bank y\u0026ecirc;u cầu phải đầy đủ c\u0026aacute;c nội dung v\u0026agrave; hướng dẫn tại link: https://ghn.vn/pages/ghn-xu\u0026nbsp;\u003c/li\u003e\n\u003cli\u003eBước 2: User tạo Eform với đầy đủ trường th\u0026ocirc;ng tin, k\u0026egrave;m theo h\u0026igrave;nh ảnh sao k\u0026ecirc; ch\u0026iacute;nh x\u0026aacute;c c\u0026oacute; đầy đủ th\u0026ocirc;ng tin của khoản chuyển khoản của kh\u0026aacute;ch h\u0026agrave;ng (Nội dung chuyển khoản, ng\u0026agrave;y giao dịch)\u003c/li\u003e\n\u003cli\u003eBước 3: AM \u0026amp; BDM duyệt Eform (nếu c\u0026oacute;)\u003c/li\u003e\n\u003cli\u003eBước 4: GĐV \u0026amp; GĐKD duyệt Eform (nếu c\u0026oacute;)\u003c/li\u003e\n\u003cli\u003eBước 5: Revenue Management Team nhận data từ Eform v\u0026agrave; thực hiện thao t\u0026aacute;c nạp tiền theo từng phi\u0026ecirc;n l\u0026agrave;m việc\u003c/li\u003e\n\u003c/ol\u003e\n\u003cp\u003e\u0026raquo; PHI\u0026Ecirc;N NẠP TIỀN:\u003cbr /\u003eTừ Thứ Hai đến Thứ S\u0026aacute;u: 9h15, 11h15, 13h15, 15h15, 17h15.\u003cbr /\u003eTừ Thứ Bảy đến Chủ Nhật: 11h15 v\u0026agrave; 15h15.\u003cbr /\u003eLưu \u0026yacute; thời gian tr\u0026ecirc;n l\u0026agrave; bắt đầu phi\u0026ecirc;n l\u0026agrave;m việc kh\u0026ocirc;ng phải thời gian kết th\u0026uacute;c phi\u0026ecirc;n l\u0026agrave;m việc.\u003c/p\u003e\n\u003cp\u003e\u0026raquo; C\u0026aacute;ch check th\u0026ocirc;ng tin về c\u0026aacute;c đ\u0026atilde; nạp bảo l\u0026atilde;nh/chưa được nạp bảo l\u0026atilde;nh:\u003c/p\u003e\n\u003cp\u003e- Check c\u0026aacute;c khoản đ\u0026atilde; nạp bảo l\u0026atilde;nh tại link:\u0026nbsp;\u003ca href="https://docs.google.com/spreadsheets/d/1LCXfXvNJ6V0lN_MEcZrMCMqFeTSpRt0Ao5bM-jPHiJ0/edit#gid=928538511"\u003e[RM] KIỂM TRA TH\u0026Ocirc;NG TIN NẠP V\u0026Iacute; XU CREDIT\u003c/a\u003e\u003c/p\u003e\n\u003cp\u003e\u0026raquo; C\u0026aacute;ch xử l\u0026yacute; c\u0026aacute;c khoản kh\u0026aacute;ch h\u0026agrave;ng nạp nhầm/sai th\u0026ocirc;ng tin:\u003cbr /\u003e- Tất cả những khoản tiền nạp nhầm user vui l\u0026ograve;ng gửi Mail HRW cc cấp quản l\u0026yacute; trực tiếp, Accounts Receivable Team 02\u003c/p\u003e\n\u003cp\u003e- Nội dung Mail phải bao gồm đầy đủ c\u0026aacute;c th\u0026ocirc;ng tin sau:\u003cbr /\u003e+ ID Kh\u0026aacute;ch h\u0026agrave;ng\u003cbr /\u003e+ Số tiền\u003cbr /\u003e+ Ng\u0026agrave;y giao dịch\u003cbr /\u003e+ H\u0026igrave;nh ảnh sao k\u0026ecirc;\u003cbr /\u003e+ L\u0026yacute; do nạp nhầm/sai th\u0026ocirc;ng tin\u003cbr /\u003e- Sau khi cấp quản l\u0026yacute; x\u0026aacute;c nhận, Revenue Management Team sẽ feedback v\u0026agrave; xử l\u0026yacute; case by case\u0026nbsp;\u003c/p\u003e\n\u003cp\u003eFYI.\u003c/p\u003e\n\u003cp\u003e\u003ca href="https://eform.haraworks.vn/forms/guideline/61165f3034776500016af2b7"\u003e- Chi tiết c\u0026aacute;c bước quy tr\u0026igrave;nh sẽ xử l\u0026yacute; phiếu của bạn\u003c/a\u003e\u003c/p\u003e',
      status: "inactive",
      approve_type: "all_level",
      flow_group_id: "651fae9941825a4f58a83d7b",
      owner_employee_ids: [2035864],
      updated_ip: "14.242.75.77",
      updated_employee: 2035864,
      updated_date: "2024-07-19T03:30:02.281Z",
      created_ip: "42.116.19.213",
      created_employee: 2035864,
      created_source: "fe",
      created_date: "2023-10-16T04:40:23.697Z",
    },
    {
      _id: "652660e9e48483cfb86aed45",
      name: "Yêu cầu thay đổi Nhân viên phụ trách Khách hàng (Cùng Vùng)",
      description:
        "\u003cp\u003eEform d\u0026ugrave;ng để chuyển lead c\u0026ugrave;ng V\u0026ugrave;ng\u003c/p\u003e",
      status: "inactive",
      approve_type: "all_level",
      flow_group_id: "651fae9941825a4f58a83d7b",
      owner_employee_ids: [2035864],
      updated_ip: "42.116.19.213",
      updated_employee: 2035864,
      updated_date: "2023-10-31T08:19:11.744Z",
      created_ip: "42.116.19.213",
      created_employee: 2035864,
      created_source: "fe",
      created_date: "2023-10-11T08:46:33.858Z",
    },
    {
      _id: "651fe233b259a5e00330be2a",
      name: "Yêu cầu thay đổi Nhân viên phụ trách Khách hàng (Khác khối thương mại/ Vùng)",
      description:
        "\u003cp\u003eĐiều kiện chuyển lead:\u003c/p\u003e\n\u003cp\u003e1. Kh\u0026aacute;ch h\u0026agrave;ng ngừng l\u0026ecirc;n đơn qu\u0026aacute; 60 ng\u0026agrave;y\u003c/p\u003e\n\u003cp\u003e2. Kh\u0026aacute;ch h\u0026agrave;ng tạo lead chưa c\u0026agrave;i gi\u0026aacute; qu\u0026aacute; 7 ng\u0026agrave;y\u003c/p\u003e\n\u003cp\u003e3. Kh\u0026aacute;ch h\u0026agrave;ng c\u0026agrave;i gi\u0026aacute; chưa l\u0026ecirc;n đơn qu\u0026aacute; 7 ng\u0026agrave;y\u003c/p\u003e",
      status: "inactive",
      approve_type: "all_level",
      flow_group_id: "651fae9941825a4f58a83d7b",
      owner_employee_ids: [2035864],
      updated_ip: "113.187.162.43",
      updated_employee: 2035864,
      updated_date: "2024-09-04T04:22:06.815Z",
      created_ip: "42.116.19.213",
      created_employee: 2035864,
      created_source: "fe",
      created_date: "2023-10-06T10:32:19.743Z",
    },
];

export const de_xuat_gia_ban_voi_loai_dich_vu = getData(
  quy_trinh_xy_ly_metadata,
  "de_xuat_gia_ban_voi_loai_dich_vu"
);
export const tinh_trang_khach_hang = getData(
  quy_trinh_xy_ly_metadata,
  "tinh_trang_khach_hang"
);
export const mo_ta_ly_do_de_xuat = getData(
  quy_trinh_xy_ly_metadata,
  "mo_ta_ly_do_de_xuat"
);
export const doi_thu = getData(quy_trinh_xy_ly_metadata, "doi_thu");
export const nganh_hang = getData(quy_trinh_xy_ly_metadata, "nganh_hang");
export const ty_trong_don_noi_vung_lien_vung = getData(
  quy_trinh_xy_ly_metadata,
  "ty_trong_don_noi_vung_lien_vung"
);

export const so_nam_ban_hang = getData(
  quy_trinh_xy_ly_metadata,
  "so_nam_ban_hang"
);
export const so_nhan_vien_cua_shop = getData(
  quy_trinh_xy_ly_metadata,
  "so_nhan_vien_cua_shop"
);
export const kenh_ban_hang_online = getData(
  quy_trinh_xy_ly_metadata,
  "kenh_ban_hang_online"
);
export const luot_theo_doi_hoac_thich_kenh = getData(
  quy_trinh_xy_ly_metadata,
  "luot_theo_doi_hoac_thich_kenh"
);
export const co_chay_quang_cao_khong = getData(
  quy_trinh_xy_ly_metadata,
  "co_chay_quang_cao_khong"
);
export const co_livestream_ban_hang_khong = getData(
  quy_trinh_xy_ly_metadata,
  "co_livestream_ban_hang_khong"
);
export const loai_gia_dang_di_theo_tuyen = getData(
  quy_trinh_xy_ly_metadata,
  "loai_gia_dang_di_theo_tuyen"
);
export const loai_gia_dang_di_theo_khoi_luong = getData(
  quy_trinh_xy_ly_metadata,
  "loai_gia_dang_di_theo_khoi_luong"
);
export const chinh_sach_phu_phi = getData(
  quy_trinh_xy_ly_metadata,
  "chinh_sach_phu_phi"
);
export const san_luong_cam_ket = getData(
  quy_trinh_xy_ly_metadata,
  "san_luong_cam_ket"
);
export const phan_khuc_khoi_luong = getData(
  quy_trinh_xy_ly_metadata,
  "phan_khuc_khoi_luong"
);
export const doanh_thu_hang_nang_cam_ket = getData(
  quy_trinh_xy_ly_metadata,
  "doanh_thu_hang_nang_cam_ket"
);
export const de_xuat_gia_ban_tinh_tren_1_kg_bang_gia_toi_thieu_20kg = getData(
  quy_trinh_xy_ly_metadata,
  "de_xuat_gia_ban_tinh_tren_1_kg_bang_gia_toi_thieu_20kg"
);

function getData(array, propertyName) {
  return array.find((i) => i["command"] == propertyName)["data"];
}
