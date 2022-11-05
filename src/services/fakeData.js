const posts = {
  en: {
    flagImg: "/images/en-flag.png",
    list: [
      {
        title: "E-Commerce Platform B2B",
        content: [
          "An e-commerce floor or an e-commerce trading floor is a place where activities of buying, selling and exchanging goods of one or more specific individuals and organizations in the form of a website take place.",
          "On the e-commerce exchange, every individual or organization who is not the owner or manager of the website or app will be able to carry out supply and sales activities on that platform.",
        ],
        imgURL: "/images/phone-1.png",
        button: "intro video",
      },
      {
        title: "Outstanding Features Of App",
        list: [
          "Post products on your business",
          "Convenient electronic name card",
          "Texting, calling to exchange information",
          "Livestream to introduce products and businesses",
        ],
        imgURL: "/images/phone-3.png",
        style: "mb-0",
      },
      {
        title: "Poho Born For Purpose",
        list: [
          "Overcoming difficult customer search",
          "Find reputable, high quality products",
          "Support businesses advertising, online fairs",
          "Late global transactions should be simpler and easier",
          "Consumer behavior is gradually changing from offline to online",
        ],
        imgURL: "/images/phone-5.png",
      },
      {
        title: "Scan QR code",
        content: [
          "Scan the QR code to quickly download the Poho app suitable for your operating system",
          "Open the QR code scanning application, point the phone's camera at the QR code to be scanned, right after that, the phone screen will display information about the product, even comments and reviews of buyers. before.",
        ],
        imgURL: "/images/phone-4.png",
      },
    ],
  },
  vn: {
    flagImg: "/images/vn-flag.png",
    list: [
      {
        title: "Sàn Thương Mại Điện Tử B2B",
        content: [
          "Sàn thương mại điện tử hay sàn giao dịch thương mại điện tử là nơi diễn ra các hoạt động mua bán, trao đổi hàng hóa của một hoặc nhiều cá nhân, tổ chức cụ thể dưới hình thức website.",
          "Trên sàn giao dịch thương mại điện tử, mọi cá nhân, tổ chức không phải là chủ sở hữu hoặc quản lý website, app đều sẽ được thực hiện các hoạt động cung ứng và bán hàng trên nền tảng đó.",
        ],
        imgURL: "/images/phone-1.png",
        button: "video giới thiệu",
      },
      {
        title: "Các Tính Năng nổi Bật Của App",
        list: [
          "Đăng sản phẩm trên doanh nghiệp của bạn",
          "Name card điện tử tiện lợi",
          "Nhắn tin, gọi điện trao đổi thông tin",
          "Livestream giới thiệu sản phẩm, doanh nghiệp",
        ],
        imgURL: "/images/phone-3.png",
        style: "mb-0",
      },
      {
        title: "Poho Sinh Ra Nhằm Mục Đích",
        list: [
          "Khắc phục tìm kiếm khách hàng khó khăn",
          "Tìm nguồn hàng uy tín, chất lượng cao",
          "Hỗ trợ doanh nghiệp quảng cáo, hội chợ trực tuyến",
          "Giao dịch toàn cầu trể nên đơn giản và dễ dàng hơn",
          "Hành vi người tiêu dùng dần thay đổi từ offline sang online",
        ],
        imgURL: "/images/phone-5.png",
      },
      {
        title: "Quét mã QR code",
        content: [
          "Quét mã QR code để tải nhanh ứng dụng Poho phù hợp với hệ điều hành của bạn",
          "Mở ứng dụng quét mã QR , hướng camera của điện thoại về đoạn mã QR cần quét, ngay sau đó, màn hình điện thoại sẽ hiển thị các thông tin về sản phẩm, thậm chí cả những bình luận, đánh giá của những người mua trước đó.",
        ],
        imgURL: "/images/phone-4.png",
      },
    ],
  },
};

export const getAll = (language = "vn") => {
  if (language == "vn") return [...posts.vn.list];
  return [...posts.en.list];
};

export const getFlagImg = (language) => {
  if (language == "vn") return posts.vn.flagImg;
  return posts.en.flagImg;
};
