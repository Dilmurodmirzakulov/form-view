const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["link"],
  [{ list: "ordered" }, { list: "bullet" }],
];

$(document).ready(function () {
  $(".form-card").click(function () {
    $(".form-card").removeClass("active");
    $(this).addClass("active");
  });

  $(".form-title").click(function () {
    $(this).addClass("active");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".form-title").length) {
      $(".form-title").removeClass("active");
    }
  });

  $(".editor").each(function () {
    const placeholder = $(this).data("placeholder");

    new Quill(this, {
      placeholder: placeholder,
      theme: "bubble",
      modules: {
        toolbar: toolbarOptions,
      },
    });
  });
});
