const generateBeforeCards = () => {
  const beforeCards = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Kalam&family=Vujahday+Script&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profiles</title>
</head>

<header>
  <h1>My Team</h1>
</header>

<body>
  <main class="d-flex flex-wrap p-2 bd-highlight justify-content-center">`;
  return beforeCards;
}

const generateAfterCards = () => {
  const afterCards = `  </main>
</body>
</html>`;
  return afterCards;
}

module.exports = {generateBeforeCards};
module.exports = {generateAfterCards};
