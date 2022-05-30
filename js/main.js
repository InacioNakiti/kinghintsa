// Declaring variables 
const nationalCertificate = document.getElementById('national_certificate');
const nCProgramModal = document.querySelector('.nat-certificate-programme-modal');
const engineering = document.getElementById('engineering');
const engProgramModal = document.querySelector('.engineering-programme-modal');
const business = document.getElementById('business');
const businessProgramModal = document.querySelector('.business-programme-modal');
const shortCourse = document.getElementById('short_courses');
const shortCourseProgramModal = document.querySelector('.sc-programme-modal');


// Show hidden elements for NATIONAL CERTIFICATE on column click
// Hide the other columns content and elements 
nationalCertificate.addEventListener('click', () => {
    engProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-eng').style.display = 'none';
    businessProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-bs').style.display = 'none';
    shortCourseProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-sc').style.display = 'none';

    if(nCProgramModal.style.display === 'block') {
        nCProgramModal.style.display = 'none';
        document.querySelector('.pyramid-shape-nc').style.display = 'none';

    } else {
        nCProgramModal.style.display = 'block';
        document.querySelector('.pyramid-shape-nc').style.display = 'block';
    }
});



// Show hidden elements for ENGINEERING on column click
// Hide the other columns content and elements 
engineering.addEventListener('click', () => {
    nCProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-nc').style.display = 'none';
    businessProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-bs').style.display = 'none';
    shortCourseProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-sc').style.display = 'none';

    if(engProgramModal.style.display === 'block') {
        engProgramModal.style.display = 'none';
        document.querySelector('.pyramid-shape-eng').style.display = 'none';

    } else {
        engProgramModal.style.display = 'block';
        document.querySelector('.pyramid-shape-eng').style.display = 'block';
    }
});

// Show hidden elements for BUSINESS on column click
// Hide the other columns content and elements 
business.addEventListener('click', () => {
    nCProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-nc').style.display = 'none';
    engProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-eng').style.display = 'none';
    shortCourseProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-sc').style.display = 'none';


    if(businessProgramModal.style.display === 'block') {
        businessProgramModal.style.display = 'none';
        document.querySelector('.pyramid-shape-bs').style.display = 'none';

    } else {
        businessProgramModal.style.display = 'block';
        document.querySelector('.pyramid-shape-bs').style.display = 'block';
    }
});

// Show hidden elements for SHORT COURSES on column click
// Hide the other columns content and elements 
shortCourse.addEventListener('click', () => {
    nCProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-nc').style.display = 'none';
    engProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-eng').style.display = 'none';
    businessProgramModal.style.display = 'none';
    document.querySelector('.pyramid-shape-bs').style.display = 'none';

    if(shortCourseProgramModal.style.display === 'block') {
        shortCourseProgramModal.style.display = 'none';
        document.querySelector('.pyramid-shape-sc').style.display = 'none';

    } else {
        shortCourseProgramModal.style.display = 'block';
        document.querySelector('.pyramid-shape-sc').style.display = 'block';    
    }
})


// Numbers counter using JQUERY 
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    counted = 1;
  }

});