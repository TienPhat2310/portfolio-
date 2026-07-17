# Nguyễn Văn Tiến Phát — Cybersecurity Portfolio

Portfolio cá nhân giới thiệu kinh nghiệm, kỹ năng và các dự án của Nguyễn Văn Tiến Phát trong lĩnh vực An toàn thông tin.

**Website:** [tienphat.tech](https://tienphat.tech)

## Nội dung chính

- Hồ sơ SOC Intern / Security Engineer.
- Kinh nghiệm với SIEM và phân tích log: Wazuh, Kaspersky KUMA.
- Tự động hóa phản ứng sự cố bằng n8n (SOAR).
- Network Security, SDN và ứng dụng Machine Learning trong phát hiện sự cố.
- Danh sách dự án, thông tin liên hệ và CV có thể mở bằng trình xem PDF của trình duyệt hoặc tải trực tiếp qua endpoint `/download-cv`.
- Giao diện responsive, dark/light theme và hiệu ứng chuyển động.

## Công nghệ

- Next.js 16 (App Router) và React 19.
- TypeScript.
- Tailwind CSS 4.
- Framer Motion.
- Lucide React.
- next-themes.
- Triển khai trên Vercel với tên miền `tienphat.tech`.

## Chạy dự án trên máy

Yêu cầu Node.js 20 trở lên và npm.

```bash
git clone https://github.com/TienPhat2310/portfolio-.git
cd portfolio-
npm ci
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

## Kiểm tra trước khi triển khai

```bash
npm run lint
npm run build
npm audit
```

`npm audit` hiện có thể báo cảnh báo mức **moderate** từ bản PostCSS được đóng gói bên trong Next.js. Website không nhận hoặc biên dịch CSS do người dùng cung cấp nên đường khai thác được mô tả trong cảnh báo không xuất hiện trong ứng dụng này. Không chạy `npm audit fix --force` vì npm đề xuất hạ Next.js xuống một phiên bản không tương thích; hãy nâng cấp khi Next.js stable phát hành bản chứa PostCSS đã vá.

## Bảo mật

- Không lưu API key hoặc secret trong mã nguồn.
- Form liên hệ mở ứng dụng email trên máy người dùng; website không thu thập hay lưu nội dung form.
- Các security header cơ bản được cấu hình trong `next.config.ts` để hạn chế clickjacking, MIME sniffing và quyền truy cập camera/microphone/vị trí.
- Bộ đếm lượt xem dùng dịch vụ công khai của bên thứ ba, vì vậy chỉ mang tính tham khảo và không nên dùng làm số liệu phân tích tin cậy.

## Cấu trúc thư mục

```text
app/                    # App Router, metadata và CSS toàn cục
src/components/         # Các section và component giao diện
public/                 # Logo, CV và tài nguyên tĩnh
next.config.ts          # Cấu hình Next.js và security headers
```

## Troubleshooting / Các lỗi đã gặp

### Nút trên desktop nhìn thấy nhưng không bấm được

- **Triệu chứng:** Nút CV và các nút trong nội dung không phản hồi ở màn hình desktop.
- **Nguyên nhân:** Navbar có đồng thời `bottom-0` và `sm:top-0`, làm phần tử fixed giãn toàn bộ chiều cao màn hình và tạo một lớp trong suốt chặn click.
- **Cách sửa:** Dùng `sm:bottom-auto` cho navbar; đặt `pointer-events-none` ở wrapper và `pointer-events-auto` ở thanh điều hướng thật.
- **Cách kiểm tra:** Dùng hit-test tại tâm nút; phần tử nhận click phải là chính link/button hoặc phần tử con của nó, không phải wrapper navbar.

### CV không tải hoặc bị kẹt ở trang trắng

- File trong `public/` được Vercel trả với `Content-Disposition: inline`, nên hành vi tải trực tiếp có thể khác nhau giữa Chrome và trình duyệt tích hợp.
- Nút chính mở `/Nguyen_Van_Tien_Phat_Resume.pdf` bằng trình xem PDF để tương thích rộng nhất. Người dùng có thể tải bằng nút download của trình xem PDF.
- Endpoint `/download-cv` vẫn trả file với `Content-Disposition: attachment` cho trình duyệt hỗ trợ tải trực tiếp.
- Không tạo thẻ `<a>` rồi gọi `.click()` bằng JavaScript; dùng liên kết HTML thật để tránh popup/download bị chặn.

### Light mode nhưng icon và tech tag vẫn tối

- **Nguyên nhân:** Dark mode mặc định của Tailwind CSS 4 có thể đi theo `prefers-color-scheme` của hệ điều hành, trong khi `next-themes` đổi class `.dark`/`.light` trên trang.
- **Cách sửa:** Khai báo `@custom-variant dark (&:where(.dark, .dark *));` trong `app/globals.css`.
- Icon và tech tag dùng các biến semantic `--theme-control*` thay vì trộn nhiều class màu `dark:`. Cách này giữ màu ổn định sau khi hiệu ứng chuyển theme hoàn tất.

### Vercel đã deploy nhưng trình duyệt vẫn hiện bản cũ

- Kiểm tra commit mới đã có trạng thái `Deployment has completed`.
- Tải lại bằng `Ctrl + F5` hoặc mở URL có query tạm, ví dụ `?deploy=<commit>`.
- Xác nhận trực tiếp HTML, CSS hoặc response header trên tên miền production trước khi kết luận deploy lỗi.

## Cập nhật CV

- Giữ tên file production là `public/Nguyen_Van_Tien_Phat_Resume.pdf` để link trên website không bị đổi.
- Nên lưu source LaTeX trong một thư mục riêng cùng các file `.cls`, `.sty`, hình ảnh và font liên quan.
- Khi chuyển CV sang tiếng Anh, ưu tiên cách diễn đạt theo thành tích: động từ hành động, công nghệ đã dùng, phạm vi triển khai và kết quả đo được.
- Sau khi biên dịch, kiểm tra lại PDF ở kích thước A4: không tràn dòng, không cắt chữ, bullet đồng đều và vẫn nằm gọn trong một trang nếu có thể.
- Chạy lại `npm run lint` và `npm run build`, sau đó deploy lên Vercel.

## Triển khai

Repo có thể được import trực tiếp vào Vercel. Vercel sẽ tự nhận diện Next.js, chạy `npm run build` và triển khai từ nhánh production đã cấu hình.

## Liên hệ

- GitHub: [TienPhat2310](https://github.com/TienPhat2310)
- Website: [tienphat.tech](https://tienphat.tech)
