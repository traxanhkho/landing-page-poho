import Button from "./Button";
import ListTitle from "./ListTitle";

function PageItem(props) {
  return (
    <div className="page-item section fp-responsive">
      <div className="container-fluid container-custom">
        <div className="row row-custom">
          <div className="col-lg-6 col-custom">
            <div className="page-item_content">
              <h2>{props.post.title}</h2>
              {props.post.content && props.post.content.map((c) => <p>{c}</p>)}
              {props.post.list && <ListTitle list={props.post.list} />}
              {props.post.button && <Button text={props.post.button} />}

              <div className="content-cart_img">
                <img
                  src="/images/cart.svg"
                  alt="Poho - giỏ hàng công ty Poho"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-custom ">
            <div className="page-item_image">
              <img src={props.post.imgURL} alt="Poho hình ảnh ứng dụng" />
            </div>
            <div className="page-item_block">
              <img
                src="/images/block-1.svg"
                alt="công ty Poho - block left effect"
                className="block-left"
              />
              <img
                src="/images/block-2.svg"
                alt="công ty Poho - block bottom effect"
                className="block-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageItem;
