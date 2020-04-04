$(function () {

    const consts = {
        skills : "skills",
        languages : "languages",
        experiences: "experiences",
        education : "education",
    };

    display = ".display-js";
    personaldetails = ".person-details-js";
    skills = ".skills-js";
    languages = ".languages-js";
    exps =".experiences-js";
    education = ".education-js"
    about = ".about-js";

    $.ajax({
        url: 'data/profile.json',
        method: 'GET',
    }).done(function (data) {
        var profile = data.profile;
        console.log(profile);
        // sett profile
        $(display).children('.profile-image-js').css("background-image",`url(${profile.image_url})`)
        $(display).children().children('h2').text(profile.name)

        // set other details
        $(about).text(profile.about);
        $(personaldetails).html(getPersonalDetailsTemplate(profile))
        $(skills).html(RenderList(profile.skills,consts.skills));
        $(languages).html(RenderList(profile.languages,consts.languages));

        // work exp
        $(exps).html(RenderList(profile.experiences,consts.experiences))

        // education 
        $(education).html(RenderList(profile.education_history,consts.education))
    }).fail(function (a, b, error) {

    });


    function getPersonalDetailsTemplate(p){
        return `<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>${p.designation}</p>
        <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>${p.address}</p>
        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>${p.email}</p>
        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>${p.phone}</p>`;
    }

    function RenderList(list,template){
        var res ='';
        $.each(list,function(i,e){
            if(template === consts.skills){
                res += getSkillsTemplate(e);
            }
            if(template === consts.languages){
                res += getLanguagesTemplate(e);
            }
            if(template === consts.experiences){
                res += getExperienceTemplate(e);
            }
            if(template === consts.education){
                res += getEducationTemplate(e);
            }
        });
        return res;
    }

    function getSkillsTemplate(e){
        return `<p>${e.name}</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:${e.score}%">${e.score}%</div>
        </div>`;
    }

    function getLanguagesTemplate(e){
        return `<p>${e.name}</p>
        <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:${e.score}%"></div>
        </div>`;
    }

    function getExperienceTemplate(e){
        var res =`<div class="w3-container">
        <h5 class="w3-opacity"><b>${e.designation}</b></h5>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right">
        </i>${e.from} - `;
        res += e.isCurrent==true ? `<span class="w3-tag w3-teal w3-round">Current</span>`:`${e.to}`;
        res += `</h6>`;
        res += `<p>${e.company}</p>
        <p>${e.description}</p>
        <hr>
        </div>`;
        
        return res;
    }

    function getEducationTemplate(e){
        return `<div class="w3-container">
        <h5 class="w3-opacity"><b>${e.school_name}</b></h5>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${e.from} - ${e.to}</h6>
        <p>${e.description}</p>
        <hr>
    </div>`;
    }

});
