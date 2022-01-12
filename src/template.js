//some mapping happens here

function createCards(data) {

    function managerCard(response) {
        return `
        <div class="top">
        <h2>${response.name}</h2>
        <p>Manager</p>
        </div>
        <div class="bottom">
        <p>${response.id}</p>
        <p>${response.email}</p>
        <p>${response.officeNumber}</p>
        </div>
        `;
    }

    function engineerCard(response) {
        return `
        <div class="top">
        <h2>${response.name}</h2>
        <p>Engineer</p>
        </div>
        <div class="bottom">
        <p>${response.id}</p>
        <p>${response.email}</p>
        <p>${response.github}</p>
        </div>
        `;
    }

    function internCard(response) {
        return `
        <div class="top">
        <h2>${response.name}</h2>
        <p>Intern</p>
        </div>
        <div class="bottom">
        <p>${response.id}</p>
        <p>${response.email}</p>
        <p>${response.school}</p>
        </div>
        `;
    }


    const cards =[];

    // mapping happens here

    cards.push(
        data.filter(emp => emp.getRole() === "Manager")
        .map(manager => managerCard(manager))
        .join("")
    )

    cards.push(
        data.filter(emp => emp.getRole() === "Engineer")
        .map(engineer => engineerCard(engineer))
        .join("")
    )

    cards.push(
        data.filter(emp => emp.getRole() === "Intern")
        .map(intern => internCard(intern))
        .join("")
    )

    return cards.join("")
}






function generateHtml(data) {
    return`
    <!doctype html>
    <html lang="en">
    <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Team Generator</title>
    </head>
    <body>

    <h1 class="team-name">${data.teamName}</h1>

    <section class="employee-cards">
        <div class="employee">${createCards(data)}</div>
    </section>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="../index.js"></script>
    </body>
    </html>
    `
}

module.exports = generateHtml;