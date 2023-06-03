export const ContactMe = () => {
  return (
    <>
      <div id="contact" class="container contact rounded-5 py-2">
        <div class="title">
          <span>Contact Me</span>
        </div>
        <div class="row fa-3x">
          <div class="col d-flex justify-content-around pb-4">
            <a href="tel:0409876789">
              <i class="fa-solid fa-mobile"></i>
            </a>
            <a href="mailto:yor@email.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="">
              {" "}
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              {" "}
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
