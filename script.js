function getUser() {
    var userId = document.getElementById('userIdInput').value;
    
    // Hacer una solicitud a la API con el ID del usuario
    if (!userId)
    userId = "@me"
    fetch(`https://universal-cors-proxy.glitch.me/${encodeURIComponent(`https://api.mdcdev.me/v1/users/${userId}`)}`)
    .then(response => response.json())
    .then(data => {
        const userText = `${JSON.stringify(data).replaceAll(",",",<p></p>").replaceAll("{","{<p></p>").replaceAll("}","<p></p>}").replaceAll("[","[<p></p>").replaceAll("]","<p></p>]")} `;
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = userText;
        console.log(data);
    })
    .catch(error => console.error(error));
    
   
}
  

// const a = "{"id":"696491260071903233","username":"MDC","global_name":null,"display_name":null,"avatar":"536dc4712370ac3c1ef39a94ab71d734","avatar_decoration":null,"discriminator":"0001","public_flags":4194562,"banner":"a_1e7199c8855a9de4c8f729a80b6a8d52","banner_color":"#6b1dac","accent_color":7019948,"flags":["DISCORD_PARTNER","HOUSE_BALANCE","ACTIVE_DEVELOPER","NITRO"],"avatarURL":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png","bannerURL":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif","avatarURLs":{"16":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=16","32":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=32","64":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=64","128":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=128","256":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=256","512":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=512","1024":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=1024","2048":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=2048","4096":"https://cdn.discordapp.com/avatars/696491260071903233/536dc4712370ac3c1ef39a94ab71d734.png?size=4096"},"bannerURLs":{"16":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=16","32":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=32","64":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=64","128":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=128","256":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=256","512":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=512","1024":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=1024","2048":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=2048","4096":"https://cdn.discordapp.com/banners/696491260071903233/a_1e7199c8855a9de4c8f729a80b6a8d52.gif?size=4096"}}"