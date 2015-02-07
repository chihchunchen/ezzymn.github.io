/**
 * Created by EDC on 07/02/2015.
 */

jQuery("#greeting-form").on("submit", function(event_details) {
    var greeting = "Hello ";
    var name = jQuery("#fullName").val();
    var greeting_message = greeting + name;
    $("#greeting-form").hide();
    $("#greeting").append("<p>" + greeting_message + "</p>");
    alert("Submitted");
    event_details.preventDefault();
});