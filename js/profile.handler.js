$(function () {
    const consts = {
        what_i_am_doing: "whatiamdoing",
        skills: "skills",
        languages: "languages",
        experiences: "experiences",
        education: "education",
        projects: "projects",
        certifications: "certifications"
    };

    fetch('https://api.perspective-v.com/graph/resume', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        },
        body: JSON.stringify({
            query: `query getMyResume($token:String!){
                getByAccessToken(accesToken:$token){
                      name,
                      htmlTemplate,
                      jsonData
                    }
                  }`,
            variables: {
                token: '/vw5Hk1jLkGiBjvnd5xS+g=='
            }
        })
    }).then(res => res.json()).then(body => {
        console.log(body);
        var data = JSON.parse(body.data.getbyaccesstoken.jsonData);
        var template = JSON.parse(body.data.getbyaccesstoken.htmlTemplate);
        var tokens = Object.keys(data);
        var arrayDataToAppend = [];
        if (!!tokens.length) {
            Array.from(tokens).forEach(token => {
                console.log(token);
                template = template.replaceAll(`#${token}#`, data[token])

                if (data[token] instanceof Array) {
                    arrayDataToAppend.push(token);
                }
            });
        }
        $('#container').html($.parseHTML(template));

        arrayDataToAppend?.forEach(token => {
            var res = tokenTemplateArrayHandler(token, data[token]);
            $(`#${token}`).html(res);
        });

        App.InitTheme();
    });

    function tokenTemplateArrayHandler(token, data) {
        var arr = Array.from(data);
        var res = '';
        arr?.forEach(item => {

            if (token == 'subtitles') {
                var str = '';
                res += `<p>${item}</p>`;
            }

            if (token == 'experiences') {
                var expKeys = Object.keys(item);
                var exp = experiencetemplate();
                if (expKeys.length) {
                    Array.from(expKeys).forEach(expKey => {
                        exp = exp.replace(`#${expKey}#`, item[expKey])
                    });
                }
                res += exp;
            }

            if (token == 'skills') {
                var skillKeys = Object.keys(item);
                var skillsTemplate = skillTemplate();
                if (skillKeys.length) {
                    Array.from(skillKeys).forEach(skillKey => {
                        skillsTemplate = skillsTemplate.replaceAll(`#${skillKey}#`, item[skillKey])
                    });
                }
                res += skillsTemplate;
            }
        });
        return $.parseHTML(res);
    }

    function experiencetemplate() {
        return `<div class="item">
        <div class="resume-item active">
            <div class="date">#date#</div>
            <div class="name">#title# <br />#company#</div>
            <div class="single-post-text">
                <p>
                    #description#
                </p>
            </div>
            </div>
        </div>`
    }

    function skillTemplate() {
        return `<li>
        <div class="progress p#percentage#"> <!-- p90 = 90% circle fill color -->
            <div class="percentage"></div>
            <span>#percentage#%</span>
        </div>
        <div class="name">#title#</div>
        <div class="single-post-text">
            <p>
                #description#
            </p>
        </div>
    </li>`;
    }
});
