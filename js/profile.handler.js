$(function () {
    const profileDataUrl = './data/profile.json';
    const profileTemplateUrl = './data/content.html';

    Promise.all([
        fetch(profileDataUrl),
        fetch(profileTemplateUrl)
    ])
    .then(async ([profileResponse, templateResponse]) => {
        if (!profileResponse.ok) {
            throw new Error(`Unable to load ${profileDataUrl}: ${profileResponse.status}`);
        }

        if (!templateResponse.ok) {
            throw new Error(`Unable to load ${profileTemplateUrl}: ${templateResponse.status}`);
        }

        return Promise.all([
            profileResponse.json(),
            templateResponse.text()
        ]);
    })
    .then(([data, template]) => {
        var tokens = Object.keys(data);
        var arrayDataToAppend = [];
        if (!!tokens.length) {
            Array.from(tokens).forEach(token => {
                if (data[token] instanceof Array) {
                    arrayDataToAppend.push(token);
                    return;
                }

                template = template.replaceAll(`#${token}#`, data[token] ?? '');
            });
        }
        $('#container').html($.parseHTML(template));

        arrayDataToAppend?.forEach(token => {
            var res = tokenTemplateArrayHandler(token, data[token]);
            $(`#${token}`).html(res);
        });

        App.InitTheme();
    })
    .catch(error => {
        console.error('Unable to load the local portfolio content.', error);
        $('.preloader').hide();
        $('#container').html(`
            <main style="min-height: 100vh; display: grid; place-items: center; padding: 2rem; text-align: center;">
                <div>
                    <h1>Portfolio content is temporarily unavailable.</h1>
                    <p>Please refresh the page or try again shortly.</p>
                </div>
            </main>
        `);
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
