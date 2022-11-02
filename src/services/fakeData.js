const posts = [
  {
    _id: 1,
    title: "Sàn Thương Mại Điện Tử B2B",
    content: [
      {
        id: 1,
        text: "Sàn thương mại điện tử hay sàn giao dịch thương mại điện tử là nơi diễn ra các hoạt động mua bán, trao đổi hàng hóa của một hoặc nhiều cá nhân, tổ chức cụ thể dưới hình thức website.",
      },
      {
        id: 2,
        text: "Trên sàn giao dịch thương mại điện tử, mọi cá nhân, tổ chức không phải là chủ sở hữu hoặc quản lý website, app đều sẽ được thực hiện các hoạt động cung ứng và bán hàng trên nền tảng đó.",
      },
    ],
    imgURL: "/images/phone-1.png",
    button: "video giới thiệu",
  },
  {
    _id: 2,
    title: "Các Tính Năng Nỗi Bật Của App",
    list: [
      {
        id: 1,
        text: "Đăng sản phẩm trên doanh nghiệp của bạn",
      },
      {
        id: 2,
        text: "Name card điện tử tiện lợi",
      },
      {
        id: 3,
        text: "Nhắn tin, gọi điện trao đổi thông tin",
      },
      {
        id: 4,
        text: "Livestream giới thiệu sản phẩm, doanh nghiệp",
      },
    ],
    styleImg: "mb-0",
    imgURL: "/images/phone-3.png",
  },
  {
    _id: 3,
    title: "Poho Sinh Ra Nhằm Mục Đích",
    list: [
      {
        id: 1,
        text: "Khắc phục tìm kiếm khách hàng khó khăn",
      },
      {
        id: 2,
        text: "Tìm nguồn hàng uy tín, chất lượng cao",
      },
      {
        id: 3,
        text: "Hỗ trợ doanh nghiệp quảng cáo, hội chợ trực tuyến",
      },
      {
        id: 4,
        text: "Giao dịch toàn cầu trể nên đơn giản và dễ dàng hơn",
      },
      {
        id: 5,
        text: "Hành vi người tiêu dùng dần thay đổi từ offline sang online",
      },
    ],
    imgURL: "/images/phone-4.png",
  },
  {
    _id: 4,
    title: "Quét mã QR code",
    content: [
      "Quét mã QR code để tải nhanh ứng dụng Poho phù hợp với hệ điều hành của bạn",
    ],
    imgURL: "/images/phone-5.png",
  },
];

export const getAll = () => [...posts];
