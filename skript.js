const app = document.getElementById("app");

app.innerHTML = `
    <h2>${courses[0].title}</h2>

    <p><b>Урок:</b> ${courses[0].lessons[0].title}</p>

    <p><b>Оценка:</b> ${courses[0].lessons[0].result.score}/12</p>

    <p><b>Навык:</b> ${courses[0].lessons[0].result.skill}</p>
`;
