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

## Triển khai

Repo có thể được import trực tiếp vào Vercel. Vercel sẽ tự nhận diện Next.js, chạy `npm run build` và triển khai từ nhánh production đã cấu hình.

## Liên hệ

- GitHub: [TienPhat2310](https://github.com/TienPhat2310)
- Website: [tienphat.tech](https://tienphat.tech)
