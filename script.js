gpa = 0;


$("#join_class_button").click(function() {
    gpa += 1;
});




function update() {
  $("#gpa_display").text(gpa);
};

setInterval(update, 1)
