$(function () {

    const consts = {
        skills: "skills",
        languages: "languages",
        experiences: "experiences",
        education: "education",
    };

    display = ".display-js";
    personaldetails = ".person-details-js";
    skills = ".skills-js";
    languages = ".languages-js";
    exps = ".experiences-js";
    education = ".education-js"
    about = ".about-js";
    pagetitle = "#page-title-js";
    desig = ".designation-js"
    fav = "#fav";

    $.ajax({
        url: 'data/profile.json',
        method: 'GET',
    }).done(function (data) {
        var profile = data.profile;
        console.log(profile);

        $(".profile-pic-js").attr("xlink:href", profile.image_url);
        $(".firstName-js").text(profile.first)
        $(".lastName-js").text(profile.last)
        $(".dob-js").text(profile.dob)
        $(".address-js").text(profile.address)
        $(".emaail-js").text(profile.email)
        $(".phone-js").text(profile.phone)
        $(".skype-js").text(profile.skype)

        // sett profile
        $(display).children('.profile-image-js').css("background-image", `url(${profile.image_url})`)
        $(pagetitle).text(profile.name)
        $(fav).attr("href", profile.favicon)
        $(display).children().children('h2').text(profile.name)
        $(desig).text(profile.designation);
        // set other details
        $(about).text(profile.about);
        $(personaldetails).html(getPersonalDetailsTemplate(profile));
        // skills
        $(skills).html(RenderList(profile.skills, consts.skills));
        // $.each(profile.skills, function (i, e) {
        //     var dial = $(`.dial_${e.id}`);
        //     dial.knob({
        //         'min': 10,
        //         'max': 100,
        //         'width': 85,
        //         'height': 85,
        //         'displayInput': true,
        //         'fgColor': "#009688",
        //     });
        //     dial.css({"font-size":"12px"})
        //     dial.val(`${e.name}`);
        //     dial.parent().css({"margin":"0px 8px"})
        // });

        // languages
        $(languages).html(RenderList(profile.languages, consts.languages));

        // work exp
        $(exps).html(RenderList(profile.experiences, consts.experiences))

        // education 
        $(education).html(RenderList(profile.education_history, consts.education))
    }).fail(function (a, b, error) {

    });

    function getPersonalDetailsTemplate(p) {
        return `<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>${p.designation}</p>
        <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>${p.address}</p>
        <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>${p.email}</p>
        <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>${p.phone}</p>`;
    }

    function RenderList(list, template) {
        var res = '';
        $.each(list, function (i, e) {
            if (template === consts.skills) {
                res += getSkillsTemplate(e);
            }
            if (template === consts.languages) {
                res += getLanguagesTemplate(e);
            }
            if (template === consts.experiences) {
                res += getExperienceTemplate(e);
            }
            if (template === consts.education) {
                res += getEducationTemplate(e);
            }
        });
        return res;
    }

    function getKnobTemplate(e) {
        return `<input type="text" value="${e.score}" class="dial_${e.id}" data-linecap="round" disabled="disabled" readonly="readonly">`;
    }

    function getSkillsTemplate(e) {
        return `<div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="${e.score}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-text"><span>${e.name}</span><span>${e.score}%</span></div>
        </div>
        <div class="progress-text"><span>${e.name}</span></div>
    </div>`; `<p>${e.name}</p>
        <div class="w3-light-grey w3-round-xlarge w3-small">
            <div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:${e.score}%">${e.score}%</div>
        </div>`;
    }

    function getLanguagesTemplate(e) {
        return `<p>${e.name}</p>
        <div class="w3-light-grey w3-round-xlarge">
            <div class="w3-round-xlarge w3-teal" style="height:24px;width:${e.score}%"></div>
        </div>`;
    }

    function getExperienceTemplate(e) {
        var res = `<article class="timeline__item">
        <h5 class="title title--h5 timeline__title">${e.designation}</h5>
        <span class="timeline__period">${e.from} — ${(e.isCurrent == true ? 'Present' : e.to)}</span>
        <p class="timeline__description">${e.description}</p>
    </article>`
        return res;
    }

    function getEducationTemplate(e) {
        return `<article class="timeline__item">
        <h5 class="title title--h5 timeline__title">${e.school_name}</h5>
        <span class="timeline__period">${e.from} — ${e.to}</span>
        <p class="timeline__description">${e.description}</p>
    </article>`;
    }

});
