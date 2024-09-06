// Example usage in a React component or any JavaScript file
import api from "../api/AxiosInstance"; // Import the configured Axios instance
import { generateUUID } from "../utils/index";

const ticketServices = {
  getAsync: async () => {
    // https://script.google.com/macros/s/AKfycbzaSdxz532_rI3sAtkts1vcBC6pZiZEZcpJs8FsTj-xRpibJ3Mw8MBw4CE-Hph1i6X-/exec

    const response = await api.get("exec");
    console.log("response ", response.data);
    return "";
  },
  submitAsync: async (formValues, callback) => {
    try {
      const parentId = generateUUID();
      const list_xac_minh_khach_hang =
        formValues["xac_minh_khach_hang"]?.map((data, index) => {
          return [
            generateUUID(),
            parentId,
            index + 1,
            data["dia_chi_cua_hang"],
            data["anh_checkin_tai_cua_hang"],
            data["anh_san_pham_kinh_doanh"],
            data["dia_chi_cua_hang_la_noi_lay_hang"],
            data["dia_chi_lay_hang"],
            data["anh_checkin_tai_noi_lay_hang"],
          ];
        }) ?? [];

      const list_tinh_trang_kinh_doanh =
        formValues["tinh_trang_kinh_doanh"]?.map((data, index) => {
          return [
            generateUUID(),
            parentId,
            index + 1,
            data["khach_ban_si_le"],
            data["nganh_hang"],
            data["thang_cao_diem_ban_duoc_hang"],
            data["so_nam_ban_hang"],
            data["so_nhan_vien_shop"],
          ];
        }) ?? [];

      const list_thong_tin_tat_ca_cac_kenh_ban_hang =
        formValues["thong_tin_tat_ca_cac_kenh_ban_hang"]?.map((data, index) => {
          return [
            generateUUID(),
            parentId,
            index + 1,
            data["kenh_ban_hang_online"],
            data["link_kenh_ban_hang"],
            data["luot_theo_doi_hoac_thich_kenh"],
            data["co_chay_quang_cao_khong"],
            data["co_livestream_ban_hang_khong"],
          ];
        }) ?? [];

      const payload = {
        sheets: [
          "QUY_TRINH",
          "XAC_MINH_KHACH_HANG",
          "TINH_TRANG_KINH_DOANH",
          "THONG_TIN_KENH_BAN_HANG",
        ],
        sheetData: {
          QUY_TRINH: [
            [
              parentId,
              formValues["nhom_quy_trinh"] ?? "",
              formValues["quy_trinh"] ?? "",
              formValues["ma_nhan_vien"] ?? "",
              formValues["de_xuat_gia_ban_voi_loai_dich_vu"] ?? "",
              formValues["tinh_trang_khach_hang"] ?? "",
              formValues["ma_khach_hang"] ?? "",
              formValues["link_phieu_cai_gia"] ?? "",
              formValues["mo_ta_ly_do_de_xuat"] ?? "",

              formValues["doi_thu"] ?? "",
              formValues["loai_gia_dang_di_theo_tuyen"] ?? "",
              formValues["loai_gia_dang_di_theo_khoi_luong"] ?? "",
              formValues["man_hinh_san_luong_doanh_thu_don_ben_doi_thu"] ?? "",

              formValues["ty_trong_don_noi_vung_lien_vung"] ?? "",
              formValues["chinh_sach_phu_phi"] ?? "",
              formValues["ngay_bat_dau_tinh_sl_cam_ket"]?.format(
                "DD/MM/YYYY"
              ) ?? "",
            ],
          ],
          XAC_MINH_KHACH_HANG: list_xac_minh_khach_hang,
          TINH_TRANG_KINH_DOANH: list_tinh_trang_kinh_doanh,
          THONG_TIN_KENH_BAN_HANG: list_thong_tin_tat_ca_cac_kenh_ban_hang,
        },
      };
      const response = await api.post("exec?endpoint=submit_ticket", payload);
      callback && callback(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      callback && callback({ success: false });
    }
  },
};

export default ticketServices;
