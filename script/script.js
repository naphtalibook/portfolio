const myStory = $('#myStory');
const myStoryBtn = $('#myStoryBtn');
const projectsBtn = $('#projectsBtn');
const projects = $('#projects');
const cvBtn = $('#CVBtn');
const cv =$('#cv');
const main = $('#main');

$(function(){
    myStory.show();
    projects.hide();
    cv.hide(); 

projectsBtn.click( () => {
    projects.show();
    projectsBtn.addClass('active');
    myStory.hide();
    myStoryBtn.removeClass('active');
    cv.hide(); 
    cvBtn.removeClass('active');
});
myStoryBtn.click( () =>{
    myStory.show();
    myStoryBtn.addClass('active');
    projects.hide();
    projectsBtn.removeClass('active');
    cv.hide(); 
    cvBtn.removeClass('active');
});
cvBtn.click( () =>{
    cv.show(); 
    cvBtn.addClass('active');
    myStory.hide();
    myStoryBtn.removeClass('active');
    projects.hide();
    projectsBtn.removeClass('active');
});


});