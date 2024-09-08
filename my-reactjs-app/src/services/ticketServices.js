// Example usage in a React component or any JavaScript file
import api from "../api/AxiosInstance"; // Import the configured Axios instance
import { formatDate, generateUUID } from "../utils/index";
import authServices from "./authServices";

const ticketServices = {
  getAsync: async () => {
    const response = await api.get("exec");
    console.log("response ", response.data);
    return "";
  },
  submitAsync: async (formValues, callback) => {
    try {
      const loginUser = authServices.getUserSession();
      const { id, name } = loginUser;
      const createdDate = formatDate(new Date());

      const parentId = generateUUID();
      const list_xac_minh_khach_hang =
        formValues["xac_minh_khach_hang"]
          ?.filter(
            (data) =>
              Boolean(data["dia_chi_cua_hang"]) &&
              Boolean(data["anh_checkin_tai_cua_hang"]) &&
              Boolean(data["anh_san_pham_kinh_doanh"]) &&
              Boolean(data["dia_chi_cua_hang_la_noi_lay_hang"])
          )
          ?.map((data, index) => {
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
        formValues["tinh_trang_kinh_doanh"]
          ?.filter(
            (data) =>
              Boolean(data["khach_ban_si_le"]) &&
              Boolean(data["nganh_hang"]) &&
              Boolean(data["thang_cao_diem_ban_duoc_hang"]) &&
              data["thang_cao_diem_ban_duoc_hang"]?.length > 0 &&
              Boolean(data["so_nam_ban_hang"]) &&
              Boolean(data["so_nhan_vien_shop"])
          )
          .map((data, index) => {
            return [
              generateUUID(),
              parentId,
              index + 1,
              data["khach_ban_si_le"],
              data["nganh_hang"],
              data["thang_cao_diem_ban_duoc_hang"]?.join(","),
              data["so_nam_ban_hang"],
              data["so_nhan_vien_shop"],
            ];
          }) ?? [];

      const list_thong_tin_tat_ca_cac_kenh_ban_hang =
        formValues["thong_tin_tat_ca_cac_kenh_ban_hang"]
          ?.filter(
            (data) =>
              Boolean(data["kenh_ban_hang_online"]) &&
              Boolean(data["link_kenh_ban_hang"]) &&
              Boolean(data["luot_theo_doi_hoac_thich_kenh"]) &&
              Boolean(data["co_chay_quang_cao_khong"]) &&
              Boolean(data["co_livestream_ban_hang_khong"])
          )
          ?.map((data, index) => {
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
        authToken: authServices.getToken(),
        fullname: name,
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
              formValues["san_luong_thuc_te_trung_binh_3_thang_gan_nhat"] ?? "",
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

              createdDate,
              id,
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
