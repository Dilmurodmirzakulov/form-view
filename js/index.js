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
