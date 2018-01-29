$(function() {
    $('#contact-form input[type=submit]').click(sendForm);
});
function sendForm(ev) {
    const form = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
                url: "https://formspree.io/iraknopka7@gmail.com",
                method: "POST",
                data: {
                    email: $('#email').val(),
                    message: $('#message').val()
                },
                dataType: "json"
})
        .done ('load', function(ev) {
    alert('Thank you for contacting us!');
  })

  .fail ('error', function(ev) {
    alert('Oups! Something goes wrong.');
  });
    }
}      
