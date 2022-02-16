function userInformationHTML(user){
  console.log(user);
  return `
  <h2>${user.name}
  <span class="small-name">
  (@<a href="${user.html_url}" target=""_blank>${user.login})</a>)
  </span>
  </h2>
   <div class="gh-content">
    <div class="gh-avatar">
       <a href="${user.html_url} target="_blank">
          <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}"/>
      </a>
      </div>
      <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>
      </div>`;
}

function fetchGitHubInformation(event){
  let userName = $("#gh-username").val();
  if(!userName){
    $("gh-user-data").html(`<h2>Please enter a GitHub user name</h2>`)
    return;
  }

$("#gh-user-data").html(
  `<div id="loader">
  <img src="assets/loader.gif" alt="loading...">
  </div>`);
// ONLY AFTER THE LOADING GIFT WE CODE THE PROMISE TO RENDER DATA WHEN HAVING RESPONSE
$.when(
  $.getJSON(`https://api.github.com/users/${userName}`)
).then(
  function (response){
    const userData = response;
    $("#gh-user-data").html(userInformationHTML(userData))
  }, function (errorResponse){
    if(errorResponse.status === 404){
      $("#gh-user-data").html(
        `<h2> No info found for user ${username}</h2>`
      )
    } else{
      console.log(errorResponse);
      $("#gh-user-data").html(
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`
      )
    };
  }
)
}
